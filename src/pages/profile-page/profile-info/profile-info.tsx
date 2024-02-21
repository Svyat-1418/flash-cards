import s from './profile-info.module.scss'

import { Edit } from '@/shared/assets/icons/edit'
import { Logout } from '@/shared/assets/icons/logout'
import { Button } from '@/shared/ui-kit/button'
import { Typography } from '@/shared/ui-kit/typography'

type Props = {
  email: string
  name: string
  activateEditMode: () => void
  logout: () => void
}

export const ProfileInfo = ({ email, name, activateEditMode, logout }: Props): JSX.Element => {
  const handleLogout = () => logout()
  const handleActivateEditMode = () => activateEditMode()

  return (
    <div className={s.root}>
      <div className={s.userNameWrapper}>
        <Typography className={s.user} variant={'h2'} as="h3">
          {name}
        </Typography>
        <Button onClick={handleActivateEditMode} asChild>
          <Edit />
        </Button>
      </div>
      <Typography className={s.email} variant={'body2'}>
        {email}
      </Typography>
      <Button className={s.button} variant={'secondary'} as="a" onClick={handleLogout}>
        <Logout />
        Logout
      </Button>
    </div>
  )
}
