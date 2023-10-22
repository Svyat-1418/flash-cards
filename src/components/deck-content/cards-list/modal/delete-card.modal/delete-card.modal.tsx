import { Card, DeleteCardArgs } from '../../../../../services/cards/types.ts'
import { Button } from '../../../../ui/button'
import { Modal } from '../../../../ui/modal'
import { Typography } from '../../../../ui/typography'

import s from './delete-card.modal.module.scss'

type DeleteCardModalPropsType = {
  deletingCard: Card | null
  modalIsOpen: boolean
  closeModal: () => void
  deleteCard: (args: DeleteCardArgs) => Promise<any>
}

export const DeleteCardModal = ({
  modalIsOpen,
  deletingCard,
  closeModal,
  deleteCard,
}: DeleteCardModalPropsType) => {
  const deleteCardHandle = () => {
    deletingCard?.id &&
      deleteCard({ cardId: deletingCard.id }).then(() => {
        closeModal()
      })
  }

  return (
    <Modal
      open={modalIsOpen}
      showCloseButton
      onClose={closeModal}
      title={
        <Typography variant={'h2'} as={'h2'}>
          Delete Card
        </Typography>
      }
    >
      <Typography
        variant={'subtitle1'}
      >{`Do you really want to remove ${deletingCard?.question}?`}</Typography>
      <div className={s.buttonContainer}>
        <Button variant={'secondary'} onClick={closeModal}>
          Cancel
        </Button>
        <Button variant={'primary'} onClick={deleteCardHandle}>
          Delete Card
        </Button>
      </div>
    </Modal>
  )
}
