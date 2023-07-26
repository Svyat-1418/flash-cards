import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'

import { Layout } from '../components/layout'
import { useGetMeQuery } from '../services/auth/auth.ts'

import { Cards } from './cards'
import { Decks } from './decks'
import { Login } from './login'
import { PasswordRecovery } from './passwordRecovery'
import { ProfilePage } from './profile'
import { SignUpPage } from './sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: '/',
            element: <Decks />,
          },
          {
            path: 'cards/:deckId',
            element: <Cards />,
          },
          {
            path: 'profile',
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
      {
        path: 'recover-password',
        element: <PasswordRecovery />,
      },
    ],
  },
])

function ProtectedRoutes() {
  const { data, isLoading } = useGetMeQuery()

  if (isLoading) return <div>Loading...</div>

  return data ? <Outlet /> : <Navigate to="/login" />
}
