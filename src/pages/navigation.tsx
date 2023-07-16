import { NavLink } from 'react-router-dom'

import { PATH } from './path.tsx'
export default function Navigation() {
  return (
    <>
      <div>
        <NavLink to={PATH.login}>Login</NavLink>
      </div>

      <div>
        <NavLink to={PATH.registration}>Registration</NavLink>
      </div>

      <div>
        <NavLink to={PATH.checkEmail}>CheckEmail</NavLink>
      </div>

      <div>
        <NavLink to={PATH.newPassword}>newPassword</NavLink>
      </div>

      <div>
        <NavLink to={PATH.passwordRecovery}>ForgotPassword</NavLink>
      </div>
      <div>
        <NavLink to={PATH.profile}>Profile</NavLink>
      </div>
      <div>
        <NavLink to={PATH.packs}>Packs</NavLink>
      </div>
      <div>
        <NavLink to={PATH.cards}>Cards</NavLink>
      </div>
      <div>
        <NavLink to={PATH.learn}>Learn</NavLink>
      </div>
    </>
  )
}
