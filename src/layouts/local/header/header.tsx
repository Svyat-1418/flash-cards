import { Link, useNavigate } from 'react-router-dom'

import s from './header.module.scss'

import { Logout } from '@/shared/assets/icons/logout'
import { Person } from '@/shared/assets/icons/person'
import { Avatar } from '@/shared/ui-kit/avatar'
import { Button } from '@/shared/ui-kit/button'
import { Container } from '@/shared/ui-kit/container'
import { DropdownNew } from '@/shared/ui-kit/dropdown-new/dropdown-new'
import { DropdownNewItem } from '@/shared/ui-kit/dropdown-new/dropdown-new-items/dropdow-new-item'
import { Typography } from '@/shared/ui-kit/typography'
import { Logo } from '@shared/assets/icons/logo'
import { Nullable } from '@shared/types/nullable'

type HeaderPropsType = {
  isLoggedIn: boolean
  name?: string
  avatarSrc?: Nullable<string>
  email?: string
  logout: () => void
}

export const Header = ({
  isLoggedIn = true,
  name,
  avatarSrc,
  email = '',
  logout,
}: HeaderPropsType) => {
  const navigate = useNavigate()

  const toProfile = () => {
    navigate('profile')
  }
  const dropdownHeader = (name?: string, email?: string, avatarSrc?: Nullable<string>) => {
    return (
      <div className={s.dropDownHeader}>
        <Avatar userName={name ?? ''} image={avatarSrc ?? ''} />
        <div>
          <Typography variant={'subtitle2'}>{name}</Typography>
          <Typography variant={'caption'} className={s.email}>
            {email}
          </Typography>
        </div>
      </div>
    )
  }

  const loginOrAvatarContent = !isLoggedIn ? (
    <Button as={Link} to={'login'}>
      Sign In
    </Button>
  ) : (
    <DropdownNew
      trigger={
        <div className={s.avatarContainer}>
          <Typography className={s.name} variant={'subtitle1'}>
            {name}
          </Typography>
          <Avatar userName={name ?? ''} image={avatarSrc ?? ''} />
        </div>
      }
    >
      <DropdownNewItem>{dropdownHeader(name, email, avatarSrc)}</DropdownNewItem>
      <DropdownNewItem onSelect={toProfile}>
        <Person />
        <Typography>Profile</Typography>
      </DropdownNewItem>
      <DropdownNewItem>
        <div onClick={logout} className={s.dropDownElement}>
          <Logout />
          <Typography>Logout</Typography>
        </div>
      </DropdownNewItem>
    </DropdownNew>
  )

  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <Link to={'/'} className={s.logoLink}>
          <Logo />
        </Link>
        {loginOrAvatarContent}
      </Container>
    </header>
  )
}
