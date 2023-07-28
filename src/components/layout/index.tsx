import { Outlet } from 'react-router-dom'

import { useGetMeQuery, useLogoutMutation } from '../../services/auth/auth'
import { ContentContainer } from '../ui/content-container'
import { Header } from '../ui/header'

import s from './layout.module.scss'

export const Layout = () => {
  const { data } = useGetMeQuery()
  const [logout] = useLogoutMutation()

  return (
    <div className={s.container}>
      <Header isLoggedIn={!!data} email={data?.email} name={data?.name} logout={logout} />
      <div aria-hidden className={s.placeholder} />
      <ContentContainer classname={s.outletContainer}>
        <Outlet />
      </ContentContainer>
    </div>
  )
}
