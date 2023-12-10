import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Card, UpdateCardArgs } from '../../../../../services/cards/types.ts'
import { appendDataToFormData } from '../../../../../shared/utils/append-data-to-form-data.ts'
import { Button } from '../../../../ui/button'
import { ControlledTextField } from '../../../../ui/controlled'
import { Modal } from '../../../../ui/modal'
import { SelectComponent } from '../../../../ui/select'
import { Typography } from '../../../../ui/typography'

import s from './edit-card.modal.module.scss'

type EditCardModalPropsType = {
  editingCard: Card | null
  modalIsOpen: boolean
  closeModal: () => void
  onSubmit: (args: UpdateCardArgs) => Promise<any>
}
const schema = z.object({
  question: z.string().trim().nonempty('Enter question'),
  answer: z.string().trim().nonempty('Enter answer'),
})

type FormType = z.infer<typeof schema>

export const EditCardModal = ({
  editingCard,
  modalIsOpen,
  closeModal,
  onSubmit,
}: EditCardModalPropsType) => {
  const { handleSubmit, control, reset } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    values: {
      question: editingCard?.question ?? '',
      answer: editingCard?.answer ?? '',
    },
  })

  const onSubmitHandle = (args: FormType) => {
    editingCard?.id &&
      onSubmit({
        deckId: editingCard.deckId,
        cardId: editingCard.id,
        body: appendDataToFormData(args),
      }).then(() => {
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
          Edit Card
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
            Edit Card
          </Button>
        </div>
      </form>
    </Modal>
  )
}
