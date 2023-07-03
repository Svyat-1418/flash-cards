import CheckEmailIcon from '../../../assets/icons/check-email-icon.tsx'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'

import s from './check-email.module.scss'

export const CheckEmail = () => {
  const email = 'example@mail.com'

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'large'}>
        Check Email
      </Typography>
      <div className={s.checkEmailIcon}>
        <CheckEmailIcon />
      </div>
      <Typography variant={'body2'} className={s.description}>
        {`We’ve sent an Email with instructions to \n ${email}`}
      </Typography>
      <Button className={s.button} as={'a'} fullWidth>
        Back to Sign In
      </Button>
    </Card>
  )
}
