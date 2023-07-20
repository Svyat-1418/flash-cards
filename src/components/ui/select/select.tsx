import { useState } from 'react'

import * as Select from '@radix-ui/react-select'

import { SelectToggle } from '../../../assets/icons/select-toggle'
import { Typography } from '../typography'

import s from './select.module.scss'

type SelectPropsType = {
  selectItems?: Array<string>
  optionTextVariant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
    | 'error'
    | 'label'
  values?: Array<string>
  currentValue?: string
  onValueChange?: (value: string) => void
}

const defaultSelectItems = ['select1', 'select2', 'select3']

export const SelectComponent = ({
  selectItems = defaultSelectItems,
  optionTextVariant = 'body2',
  currentValue,
  onValueChange,
}: SelectPropsType) => {
  const [value, setValue] = useState(selectItems[0])
  const localCurrentValue = currentValue ? currentValue : value
  const localOnValueChange = onValueChange ? onValueChange : setValue

  return (
    <Select.Root value={localCurrentValue} onValueChange={localOnValueChange}>
      <Select.Trigger className={s.selectTrigger}>
        <Select.Value defaultValue={localCurrentValue}>
          <Typography variant={optionTextVariant}>{localCurrentValue}</Typography>
        </Select.Value>
        <Select.Icon>
          <SelectToggle />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content className={s.selectContent} position={'popper'}>
        {selectItems?.map((el, i) => {
          return (
            <Select.Item key={i} value={el} className={s.selectItem}>
              <Select.ItemText>
                <Typography variant={optionTextVariant}>{el}</Typography>
              </Select.ItemText>
            </Select.Item>
          )
        })}
      </Select.Content>
    </Select.Root>
  )
}
