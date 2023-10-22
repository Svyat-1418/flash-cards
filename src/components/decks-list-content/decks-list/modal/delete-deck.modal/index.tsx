import { Button } from '../../../../ui/button'
import { Modal } from '../../../../ui/modal'
import { Typography } from '../../../../ui/typography'
import s from '../edit-deck.modal/edit-deck.modal.module.scss'

type DeleteDeckModalPropsType = {
  modalIsOpen: boolean
  setModalIsOpen: (value: boolean) => void
  onSubmit: () => void
}
export const DeleteDeckModal = ({
  modalIsOpen,
  setModalIsOpen,
  onSubmit,
}: DeleteDeckModalPropsType) => {
  const cancelHandle = () => {
    setModalIsOpen(false)
  }

  return (
    <Modal open={modalIsOpen} showCloseButton={true} title={'Delete Pack'} onClose={cancelHandle}>
      <Typography variant={'subtitle1'}>
        Do you really want to remove Deck Name? All cards will be deleted.
      </Typography>
      <div className={s.buttonContainer}>
        <Button variant={'secondary'} onClick={cancelHandle}>
          Cancel
        </Button>
        <Button variant={'primary'} onClick={onSubmit}>
          Delete Deck
        </Button>
      </div>
    </Modal>
  )
}
