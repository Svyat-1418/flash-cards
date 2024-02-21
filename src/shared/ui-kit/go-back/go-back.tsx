import { ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'
import { useNavigate } from 'react-router-dom'

import { Button } from '../button'

import s from './go-back.module.scss'

import { ArrowBack } from '@shared/assets/icons/arrow-back'

type Props = {
  to?: string
  title: string
  className?: string
}

export const GoBack = forwardRef<ElementRef<typeof Button>, Props>(
  ({ to, title, className }, ref): JSX.Element => {
    const navigate = useNavigate()

    const onBack = () => {
      to ? navigate(to) : navigate(-1)
    }

    const goBackClassName = clsx(s.root, className)

    return (
      // @ts-expect-error TS2322
      <Button ref={ref} className={goBackClassName} variant={'link'} onClick={onBack}>
        <ArrowBack size={1.6} />
        {title}
      </Button>
    )
  }
)
