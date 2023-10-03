import { Link } from 'react-router-dom'

import { Typography } from '../typography'

import s from './back-to-decks-list.module.scss'

export const BackToDecksList = () => {
  return (
    <Typography as={Link} to={'/'} variant={'body2'} className={s.content}>
      <span>←</span>
      <span>Back to Decks List</span>
    </Typography>
  )
}
