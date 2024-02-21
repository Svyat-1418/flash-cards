import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, useState } from 'react'

import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'

import s from './dropdown-new.module.scss'

import { More } from '@/shared/assets/icons/more'

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
          {trigger ?? <More />}
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
                <DropdownPrimitive.Arrow asChild>
                  <div className={s.arrow}></div>
                </DropdownPrimitive.Arrow>
              </div>
            </DropdownPrimitive.Content>
          </DropdownPrimitive.Portal>
        )}
      </DropdownPrimitive.Root>
    )
  }
)
