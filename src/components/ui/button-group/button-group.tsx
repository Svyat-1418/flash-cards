import { Button } from '../button'
import { Typography } from '../typography'

import s from './button-group.module.scss'

export type ButtonSwitchType = {
  active: boolean
  callback: () => void
  title: string
}

type ButtonGroupPropsType = {
  label?: string
  buttons: ButtonSwitchType[]
}

export const ButtonGroup = ({ buttons, label }: ButtonGroupPropsType) => {
  return (
    <div className={s.wrapper}>
      <Typography variant={'body2'} className={s.label}>
        {label}
      </Typography>
      <div className={s.buttonGroup}>
        {buttons.map(b => {
          return (
            <Button
              key={b.title}
              variant={b.active ? 'primary' : 'tertiary'}
              onClick={b.callback}
              className={s.toggle}
            >
              <Typography variant={'body1'}>{b.title}</Typography>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
