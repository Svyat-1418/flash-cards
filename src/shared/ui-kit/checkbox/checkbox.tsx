import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './checkbox.module.scss'

import { Check } from '@/shared/assets/icons/check'

export type CheckboxProps = {
  className?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
  position?: 'left'
  errorMessage?: string
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  position,
  disabled,
  required,
  label,
  id,
  className,
  errorMessage,
}) => {
  const classNames = {
    container: clsx(s.container, className),
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, position === 'left' && s.left),
    root: s.root,
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <>
      {' '}
      <div className={classNames.container}>
        <Typography variant="body2" className={classNames.label} as={'label'}>
          <div className={classNames.buttonWrapper}>
            <CheckboxRadix.Root
              className={classNames.root}
              checked={checked}
              onCheckedChange={onChange}
              disabled={disabled}
              required={required}
              id={id}
            >
              {checked && (
                <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                  <Check />
                </CheckboxRadix.Indicator>
              )}
            </CheckboxRadix.Root>
          </div>
          {label}
        </Typography>
      </div>
      {errorMessage && (
        <Typography variant="error" className={s.errorMessage}>
          {errorMessage}
        </Typography>
      )}
    </>
  )
}
