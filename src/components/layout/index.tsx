import { Outlet } from 'react-router-dom'

import { useGetMeQuery, useLogoutMutation } from '../../services/auth/auth'

import { Header as HeaderComponent } from './../ui/header'
import s from './layout.module.scss'

export const Layout = () => {
  const { data } = useGetMeQuery()
  const [logout] = useLogoutMutation()

  return (
    <div className={s.container}>
      <HeaderComponent isLoggedIn={!!data} email={data?.email} name={data?.name} logout={logout} />
      <div aria-hidden className={s.placeholder} />
      <div className={s.outletContainer}>
        <Outlet />
      </div>
    </div>
  )
}
