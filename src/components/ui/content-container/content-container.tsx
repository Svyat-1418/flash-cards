import { FC, ReactNode } from 'react'

import s from './content-container.module.scss'

export const ContentContainer: FC<{ children: ReactNode; classname?: string }> = ({
  children,
  classname,
}) => {
  return <div className={`${s.container} ${classname}`}>{children}</div>
}
