import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './avatar-with-fallback.module.scss'

export type AvatarProps = {
  userName: string
  image?: string
  size?: 'small' | 'large'
} & ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>

export const Avatar = forwardRef<ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ userName, image, size = 'small', className, ...restProps }, ref): JSX.Element => {
    const classNames = {
      root: clsx(s.root, s[size], className),
      image: s.image,
      fallback: s.fallback,
    }

    const fallbackTitle = userName
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()

    return (
      <AvatarPrimitive.Root ref={ref} className={classNames.root} {...restProps}>
        <AvatarPrimitive.Image className={classNames.image} src={image} alt="avatar" />
        <AvatarPrimitive.Fallback className={classNames.fallback}>
          <Typography variant={'body1'}>{fallbackTitle}</Typography>
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
    )
  }
)
