import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  className?: string
  asChild?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    variant = 'primary',
    fullWidth,
    className,
    as: Component = 'button',
    asChild = false,
    ...rest
  } = props

  return (
    <Component
      className={
        asChild
          ? `${s.asChild} ${className ?? ''}`
          : `${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className ?? ''}`
      }
      {...rest}
    />
  )
}
