import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './container.module.scss'

export const Container = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const pageClasses = clsx(s.root, className)

    return <div ref={ref} className={pageClasses} {...restProps} />
  }
)
