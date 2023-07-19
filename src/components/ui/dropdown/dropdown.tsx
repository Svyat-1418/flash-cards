import { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

type DropdownPropsType = {
  trigger: ReactNode
  dropdownElements: ReactNode[]
}

export const Dropdown = ({ trigger, dropdownElements }: DropdownPropsType) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className={s.triger}>
        {trigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.content} sideOffset={7} align={'end'}>
          {dropdownElements.map((el, i) => {
            if (el !== dropdownElements.at(-1)) {
              return (
                <>
                  <DropdownMenu.Item key={i} className={s.element}>
                    {el}
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className={s.separator} />
                </>
              )
            } else {
              return (
                <DropdownMenu.Item key={i} className={s.element}>
                  {el}
                </DropdownMenu.Item>
              )
            }
          })}
          <DropdownMenu.Arrow asChild>
            <div className={s.arrow}></div>
          </DropdownMenu.Arrow>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
