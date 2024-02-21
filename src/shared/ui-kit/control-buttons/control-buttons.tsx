import { Link } from 'react-router-dom'

import { Button } from '../button'

import s from './control-buttons.module.scss'

import { Edit } from '@/shared/assets/icons/edit'
import { OutlinedPlayCircle } from '@/shared/assets/icons/play-circle-outline'
import { Trash } from '@/shared/assets/icons/trash'

type Props = {
  isAdmin?: boolean
  forCards?: boolean
  toLearn?: string
  handleEdit?: () => void
  handleDelete?: () => void
  deckIsEmpty?: boolean
}

export const ControlButtons = ({
  isAdmin = false,
  toLearn,
  handleEdit,
  handleDelete,
  forCards,
  deckIsEmpty,
}: Props) => {
  return (
    <div className={s.controlButtonContainer}>
      {!forCards && toLearn && !deckIsEmpty && (
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
