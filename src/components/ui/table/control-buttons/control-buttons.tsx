import { Edit } from '../../../../assets/icons/edit'
import { OutlinedPlayCircle } from '../../../../assets/icons/play-circle-outline'
import { Trash } from '../../../../assets/icons/trash'

import s from './control-buttons.module.scss'

type ControlButtonsPropsType = {
  isAdmin?: boolean
  read?: () => void
  update?: () => void
  remove?: () => void
}

export const ControlButtons = ({
  isAdmin = true,
  read,
  update,
  remove,
}: ControlButtonsPropsType) => {
  return (
    <div className={s.controlButtonContainer}>
      <button onClick={read} className={s.controlButton}>
        <Edit />
      </button>
      {isAdmin && (
        <>
          <button onClick={update} className={s.controlButton}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <OutlinedPlayCircle />
          </button>
          <button onClick={remove} className={s.controlButton}>
            <Trash />
          </button>
        </>
      )}
    </div>
  )
}
