import s from '../update-deck/update-deck.module.scss'

import { Button } from '@/shared/ui-kit/button'
import { Modal } from '@/shared/ui-kit/modal'
import { Typography } from '@/shared/ui-kit/typography'

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
