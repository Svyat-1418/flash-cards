import { Link } from 'react-router-dom'

import { Logo } from '../../../assets/icons/logo'

type HeaderProps = {
  isAuth: boolean
  userInfo?: {
    name: string
    avatar?: string
    email: string
  } | null
  onSignOut?: () => void
}
export const Header = ({}: HeaderProps) => {
  return (
    <header>
      <Link to={'/'}>
        <Logo />
      </Link>
    </header>
  )
}
