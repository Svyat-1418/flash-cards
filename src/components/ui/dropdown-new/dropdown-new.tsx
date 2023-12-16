import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, useState } from 'react'

import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'

import { MoreIcon } from '../../../assets/icons/more/more.tsx'

import s from './dropdown-new.module.scss'

export type DropdownProps = {
  children: ReactNode
  trigger?: ReactNode
  align?: 'start' | 'center' | 'end'
  className?: string
} & ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>

export const DropdownNew = forwardRef<ElementRef<typeof DropdownPrimitive.Content>, DropdownProps>(
  ({ children, trigger, align = 'end', className }, ref): JSX.Element => {
    const [open, setOpen] = useState(false)

    return (
      <DropdownPrimitive.Root open={open} onOpenChange={setOpen}>
        <DropdownPrimitive.Trigger className={s.trigger} asChild>
          {trigger ?? <MoreIcon />}
        </DropdownPrimitive.Trigger>

        {open && (
          <DropdownPrimitive.Portal forceMount>
            <DropdownPrimitive.Content
              ref={ref}
              className={`${s.content} ${className ? className : ''}`}
              align={align}
              onClick={event => event.stopPropagation()}
              asChild
              forceMount
            >
              <div>
                <div onClick={() => setOpen(false)}>{children}</div>
                <DropdownPrimitive.Arrow className={s.arrow} />
              </div>
            </DropdownPrimitive.Content>
          </DropdownPrimitive.Portal>
        )}
      </DropdownPrimitive.Root>
    )
  }
)
