import Edit2Outline from '../../../../assets/icons/PacksControlIcons/edit-2-outline.tsx'
import PlayCircleOutline from '../../../../assets/icons/PacksControlIcons/play-circle-outline.tsx'
import TrashOutline from '../../../../assets/icons/PacksControlIcons/trash-outline.tsx'

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
        <Edit2Outline />
      </button>
      {isAdmin && (
        <>
          <button onClick={update} className={s.controlButton}>
            <PlayCircleOutline />
          </button>
          <button onClick={remove} className={s.controlButton}>
            <TrashOutline />
          </button>
        </>
      )}
    </div>
  )
}
