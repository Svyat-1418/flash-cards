import { Link } from 'react-router-dom'

import { Edit } from '../../../assets/icons/edit'
import { OutlinedPlayCircle } from '../../../assets/icons/play-circle-outline'
import { Trash } from '../../../assets/icons/trash'
import { Button } from '../button'

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
        <Button as={Link} asChild to={toLearn} className={s.controlButton}>
          <OutlinedPlayCircle />
        </Button>
      )}
      {isAdmin ? (
        <>
          <Button asChild onClick={handleEdit} className={s.controlButton}>
            <Edit />
          </Button>
          <Button asChild onClick={handleDelete} className={s.controlButton}>
            <Trash />
          </Button>
        </>
      ) : (
        <div className={s.emptyBox}></div>
      )}
    </div>
  )
}
