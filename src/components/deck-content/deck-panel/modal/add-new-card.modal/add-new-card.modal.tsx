import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../../../ui/button'
import { ControlledTextField } from '../../../../ui/controlled'
import { Modal } from '../../../../ui/modal'
import { SelectComponent } from '../../../../ui/select'
import { Typography } from '../../../../ui/typography'

import s from './add-new-card.modal.module.scss'

type AddNewCardModalPropsType = {
  modalIsOpen: boolean
  closeModal: () => void
  onSubmit: (args: FormType) => Promise<any>
}
const schema = z.object({
  question: z.string().trim().nonempty('Enter question'),
  answer: z.string().trim().nonempty('Enter answer'),
})

type FormType = z.infer<typeof schema>

export const AddNewCardModal = ({
  modalIsOpen,
  closeModal,
  onSubmit,
}: AddNewCardModalPropsType) => {
  const { handleSubmit, control, reset } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
  })

  const onSubmitHandle = (args: FormType) => {
    onSubmit(args).then(() => {
      reset()
      closeModal()
    })
  }

  const cancelHandle = () => {
    closeModal()
    reset()
  }

  const addNewCard = handleSubmit(onSubmitHandle)

  return (
    <Modal
      open={modalIsOpen}
      showCloseButton
      title={
        <Typography variant={'h2'} as={'h2'}>
          Add New Pack
        </Typography>
      }
      onClose={cancelHandle}
    >
      <form onSubmit={addNewCard}>
        <div className={s.fields}>
          <SelectComponent selectItems={['Text', 'Picture']} fullWidth />
          <ControlledTextField control={control} name={'question'} label={'Question'} />
          <ControlledTextField control={control} name={'answer'} label={'Answer'} />
        </div>
        <div className={s.buttonContainer}>
          <Button variant={'secondary'} onClick={cancelHandle}>
            Cancel
          </Button>
          <Button variant={'primary'} type={'submit'}>
            Add New Card
          </Button>
        </div>
      </form>
    </Modal>
  )
}
