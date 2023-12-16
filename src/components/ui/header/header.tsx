import { Link, useNavigate } from 'react-router-dom'

import { NewLogo1 } from '../../../assets/icons/logo/version/new-logo1/NewLogo1.tsx'
import { Logout } from '../../../assets/icons/logout'
import { Person } from '../../../assets/icons/person'
import { Nullable } from '../../../types/common.types.ts'
import { Avatar } from '../avatar'
import { Button } from '../button'
import { Container } from '../container'
import { DropdownNewItem } from '../dropdown-new/dropdown-new-items/dropdow-new-item.tsx'
import { DropdownNew } from '../dropdown-new/dropdown-new.tsx'
import { Typography } from '../typography'

import s from './header.module.scss'

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
        <Avatar src={avatarSrc ?? ''} />
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
          <Avatar src={avatarSrc ?? ''} />
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
          <NewLogo1 />
        </Link>
        {loginOrAvatarContent}
      </Container>
    </header>
  )
}
