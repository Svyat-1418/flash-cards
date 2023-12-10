import { Outlet } from 'react-router-dom'

import { useLogoutMutation, useMeQuery } from '../../services/auth/auth-endpoints.ts'
import { Header } from '../ui/header'
import { MainWrapper } from '../ui/main-wrapper'

import s from './layout.module.scss'

export const Layout = () => {
  const { data } = useMeQuery()
  const [logout] = useLogoutMutation()

  return (
    <div className={s.appWrapper}>
      <Header
        isLoggedIn={!!data}
        email={data?.email}
        name={data?.name}
        logout={logout}
        avatarSrc={data?.avatar}
      />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </div>
  )
}
