import Logo from '../../../assets/icons/logo.tsx'
import Logout from '../../../assets/icons/logout.tsx'
import PersonOutline from '../../../assets/icons/person-outline.tsx'
import { Avatar } from '../avatar'
import { Button } from '../button'
import { ContentContainer } from '../content-container'
import { Dropdown } from '../dropdown/dropdown.tsx'
import { Typography } from '../typography'

import s from './header.module.scss'

type HeaderPropsType = {
  isLoggedIn: boolean
  name?: string
  avatarSrc?: string
  email: string
}

export const Header = ({ isLoggedIn = true, name = 'Ivan', avatarSrc, email }: HeaderPropsType) => {
  const dropdownHeader = (name: string, email: string, avatarSrc?: string) => {
    return (
      <div className={s.dropDownHeader}>
        <Avatar src={avatarSrc} />
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
    <Button>Sign In</Button>
  ) : (
    <Dropdown
      trigger={
        <div className={s.avatarContainer}>
          <Typography className={s.name} variant={'subtitle1'}>
            {name}
          </Typography>
          <Avatar src={avatarSrc} />
        </div>
      }
      dropdownElements={[
        dropdownHeader(name, email, avatarSrc),
        <>
          <div className={s.dropDownElement}>
            <PersonOutline />
            <span>Profile</span>
          </div>
        </>,
        <>
          <div className={s.dropDownElement}>
            <Logout />
            <span>Logout</span>
          </div>
        </>,
      ]}
    />
  )

  return (
    <div className={s.header}>
      <ContentContainer>
        <div className={s.headerContainer}>
          <Logo />
          {loginOrAvatarContent}
        </div>
      </ContentContainer>
    </div>
  )
}
