import { Button } from '../../../../ui/button'
import { Modal } from '../../../../ui/modal'
import { Typography } from '../../../../ui/typography'
import s from '../edit-pack.modal/edit-pack.model.module.scss'

type DeletePackModalPropsType = {
  modalIsOpen: boolean
  setModalIsOpen: (value: boolean) => void
  onSubmit: () => void
}
export const DeletePackModal = ({
  modalIsOpen,
  setModalIsOpen,
  onSubmit,
}: DeletePackModalPropsType) => {
  const cancelHandle = () => {
    setModalIsOpen(false)
  }

  return (
    <Modal open={modalIsOpen} showCloseButton={true} title={'Delete Pack'} onClose={cancelHandle}>
      <Typography variant={'subtitle1'}>
        Do you really want to remove Pack Name? All cards will be deleted.
      </Typography>
      <div className={s.buttonContainer}>
        <Button variant={'secondary'} onClick={cancelHandle}>
          Cancel
        </Button>
        <Button variant={'primary'} onClick={onSubmit}>
          Delete Pack
        </Button>
      </div>
    </Modal>
  )
}
