import { SelectComponent } from '../../select'
import { Typography } from '../../typography'

import s from './item-per-page.module.scss'

type ItemPerPagePropsType = {
  currentValue: string
  onValueChange: (value: string) => void
}
export const ItemPerPage = ({ currentValue, onValueChange }: ItemPerPagePropsType) => {
  const items = ['10', '20', '50']

  return (
    <div className={s.container}>
      <Typography as={'span'}>item per page: </Typography>
      <SelectComponent
        selectItems={items}
        currentValue={currentValue}
        onValueChange={onValueChange}
      />
    </div>
  )
}
