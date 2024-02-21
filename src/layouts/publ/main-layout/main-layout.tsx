import { Outlet } from 'react-router-dom'

import s from './main-layout.module.scss'

import { MainWrapper } from '@/layouts/local/main-wrapper'
import { useLogoutMutation, useMeQuery } from '@/services/auth/auth-endpoints'
import { Header } from '@layouts/local/header'

export const MainLayout = () => {
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
