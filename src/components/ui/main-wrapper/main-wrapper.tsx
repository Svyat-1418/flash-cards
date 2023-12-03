import { FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './main-wrapper.module.scss'

export const MainWrapper: FC<{ children: ReactNode; classname?: string }> = ({
  children,
  classname,
}) => {
  const classNames = {
    root: clsx(classname, s.root),
  }

  return <main className={classNames.root}>{children}</main>
}
