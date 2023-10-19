import { Link } from 'react-router-dom'

import { Edit } from '../../../assets/icons/edit'
import { OutlinedPlayCircle } from '../../../assets/icons/play-circle-outline'
import { Trash } from '../../../assets/icons/trash'

import s from './control-buttons.module.scss'

type Props = {
  isAdmin?: boolean
  forCards?: boolean
  toLearn?: string
  handleEdit?: () => void
  handleDelete?: () => void
}

export const ControlButtons = ({
  isAdmin = false,
  toLearn,
  handleEdit,
  handleDelete,
  forCards,
}: Props) => {
  return (
    <div className={s.controlButtonContainer}>
      {!forCards && toLearn && (
        <Link to={toLearn}>
          <button className={s.controlButton}>
            <OutlinedPlayCircle />
          </button>
        </Link>
      )}
      {isAdmin ? (
        <>
          <button onClick={handleEdit} className={s.controlButton}>
            <Edit />
          </button>
          <button onClick={handleDelete} className={s.controlButton}>
            <Trash />
          </button>
        </>
      ) : (
        <div className={s.emptyBox}></div>
      )}
    </div>
  )
}
