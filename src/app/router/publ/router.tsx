import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'

import { privateRoutes } from '@app/router/local/privateRoutes'
import { publicRoutes } from '@app/router/local/publicRoutes'
import { MainLayout } from '@layouts/publ/main-layout'
import { Error404Page } from '@pages/error404-page'
import { useMeQuery } from '@services/auth/auth-endpoints'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error404Page />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
    ],
  },
])

function ProtectedRoutes() {
  const { data, isLoading } = useMeQuery()

  if (isLoading) return <div>Loading...</div>

  return data ? <Outlet /> : <Navigate to="/login" />
}
