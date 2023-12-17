import { Button } from '../../../../ui/button'
import { Modal } from '../../../../ui/modal'
import { Typography } from '../../../../ui/typography'
import s from '../update-deck/update-deck.module.scss'

type DeleteDeckModalPropsType = {
  name: string
  modalIsOpen: boolean
  setModalIsOpen: (value: boolean) => void
  onSubmit: () => void
}
export const DeleteDeckModal = ({
  modalIsOpen,
  setModalIsOpen,
  onSubmit,
  name,
}: DeleteDeckModalPropsType) => {
  const cancelHandle = () => {
    setModalIsOpen(false)
  }

  return (
    <Modal open={modalIsOpen} showCloseButton={true} title={'Delete Pack'} onClose={cancelHandle}>
      <Typography>
        Do you really want to remove{' '}
        <Typography as={'span'} variant={'subtitle1'}>
          {name}
        </Typography>
        ? All cards will be deleted.
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
