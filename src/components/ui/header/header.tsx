import { Link } from 'react-router-dom'

import { Logo } from '../../../assets/icons/logo'
import { Logout } from '../../../assets/icons/logout'
import { Person } from '../../../assets/icons/person'
import { Nullable } from '../../../types/common.types.ts'
import { Avatar } from '../avatar'
import { Button } from '../button'
import { ContentContainer } from '../content-container'
import { Dropdown } from '../dropdown/dropdown.tsx'
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
    <Dropdown
      trigger={
        <div className={s.avatarContainer}>
          <Typography className={s.name} variant={'subtitle1'}>
            {name}
          </Typography>
          <Avatar src={avatarSrc ?? ''} />
        </div>
      }
      dropdownElements={[
        dropdownHeader(name, email, avatarSrc),
        <>
          <Link to={'profile'} className={s.dropDownElement}>
            <Person />
            <Typography>Profile</Typography>
          </Link>
        </>,
        <>
          <div onClick={logout} className={s.dropDownElement}>
            <Logout />
            <span>Logout</span>
          </div>
        </>,
      ]}
    />
  )

  return (
    <header className={s.header}>
      <ContentContainer>
        <div className={s.headerContainer}>
          <Link to={'/'}>
            <Logo />
          </Link>
          {loginOrAvatarContent}
        </div>
      </ContentContainer>
    </header>
  )
}
