import { Outlet } from 'react-router-dom'

import { useLogoutMutation, useMeQuery } from '../../services/auth/auth-endpoints.ts'
import { MainWrapper } from '../ui/content-container'
import { Header } from '../ui/header'

export const Layout = () => {
  const { data } = useMeQuery()
  const [logout] = useLogoutMutation()

  return (
    <>
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
    </>
  )
}
