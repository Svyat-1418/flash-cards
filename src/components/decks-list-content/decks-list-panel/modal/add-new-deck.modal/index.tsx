import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../../../ui/button'
import { ControlledCheckbox, ControlledTextField } from '../../../../ui/controlled'
import { Modal } from '../../../../ui/modal'
import { Typography } from '../../../../ui/typography'

import s from './add-new-deck.modal.module.scss'

const schema = z.object({
  name: z.string().trim().nonempty('Enter pack name'),
  isPrivate: z.boolean(),
})

type FormType = z.infer<typeof schema>

type AddNewPackModalPropsType = {
  modalIsOpen: boolean
  setModalIsOpen: (value: boolean) => void
  onSubmit: (data: FormType) => void
}
export const AddNewDeckModal = ({
  modalIsOpen,
  setModalIsOpen,
  onSubmit,
}: AddNewPackModalPropsType) => {
  const { handleSubmit, control, reset } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      name: '',
      isPrivate: false,
    },
  })

  const onSubmitHandle = (args: FormType) => {
    onSubmit(args)
    reset()
  }

  const addNewPack = handleSubmit(onSubmitHandle)

  return (
    <Modal
      open={modalIsOpen}
      onClose={() => setModalIsOpen(false)}
      showCloseButton
      title={
        <Typography variant={'h2'} as={'h2'}>
          Add New Pack
        </Typography>
      }
    >
      <form onSubmit={addNewPack}>
        <ControlledTextField control={control} name={'name'} label={'Add new pack'} />
        <ControlledCheckbox
          control={control}
          name={'isPrivate'}
          label={'Private pack'}
          className={s.checkbox}
        />
        <div className={s.buttonContainer}>
          <Button variant={'secondary'} onClick={() => setModalIsOpen(false)}>
            Cancel
          </Button>
          <Button variant={'primary'} type={'submit'}>
            Add New Pack
          </Button>
        </div>
      </form>
    </Modal>
  )
}
