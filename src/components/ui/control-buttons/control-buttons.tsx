import { Edit } from '../../../assets/icons/edit'
import { OutlinedPlayCircle } from '../../../assets/icons/play-circle-outline'
import { Trash } from '../../../assets/icons/trash'

import s from './control-buttons.module.scss'

type Props = {
  isAdmin?: boolean
  handleLearn?: () => void
  handleEdit?: () => void
  handleDelete?: () => void
}

export const ControlButtons = ({
  isAdmin = true,
  handleLearn,
  handleEdit,
  handleDelete,
}: Props) => {
  return (
    <div className={s.controlButtonContainer}>
      <button onClick={handleLearn} className={s.controlButton}>
        <OutlinedPlayCircle />
      </button>
      {isAdmin && (
        <>
          <button onClick={handleEdit} className={s.controlButton}>
            <Edit />
          </button>
          <button onClick={handleDelete} className={s.controlButton}>
            <Trash />
          </button>
        </>
      )}
    </div>
  )
}