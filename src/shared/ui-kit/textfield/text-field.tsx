import { ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './text-field.module.scss'

import { Eye } from '@shared/assets/icons/eye'
import { Search } from '@shared/assets/icons/search-outline'
import { VisibilityOff } from '@shared/assets/icons/visibility-off'

export type TextFieldProps = {
  containerProps?: ComponentProps<'div'>
  labelProps?: ComponentProps<'label'>
  errorMessage?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { className, errorMessage, placeholder, type, containerProps, labelProps, label, ...restProps },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const isShowPasswordButtonShown = type === 'password'
    const isShowSearchButtonShown = type === 'search'

    const finalType = getFinalType(type, showPassword)

    const classNames = {
      root: clsx(s.root, containerProps?.className),
      fieldContainer: clsx(s.fieldContainer),
      field: clsx(s.field, !!errorMessage && s.error, className),
      label: clsx(s.label, labelProps?.className),
      error: clsx(s.error),
      search: clsx(s.searchIcon),
      searchField: clsx(s.field, s.searchField),
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography variant="body2" as="label" className={classNames.label}>
            {label}
          </Typography>
        )}
        <div className={classNames.fieldContainer}>
          <label>
            {isShowSearchButtonShown && <Search className={classNames.search} />}
            <input
              className={isShowSearchButtonShown ? classNames.searchField : classNames.field}
              placeholder={placeholder}
              ref={ref}
              type={finalType}
              {...restProps}
            />
          </label>
          {isShowPasswordButtonShown && (
            <button
              className={s.showPassword}
              type={'button'}
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? <VisibilityOff /> : <Eye />}
            </button>
          )}
        </div>

        <Typography variant="error" className={classNames.error}>
          {errorMessage}
        </Typography>
      </div>
    )
  }
)

function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
