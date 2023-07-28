import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'

import { Layout } from '../components/layout'
import { useGetMeQuery } from '../services/auth/auth.ts'

import { CardsPage } from './cards.page'
import { DecksPage } from './decks.page'
import Error404Page from './error404.page/error404.page.tsx'
import { LoginPage } from './login.page'
import { PasswordRecoveryPage } from './password-recovery.page'
import { ProfilePage } from './profile.page'
import { SignUpPage } from './sign-up.page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: '/',
            element: <DecksPage />,
          },
          {
            path: 'cards/:deckId',
            element: <CardsPage />,
          },
          {
            path: 'profile',
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
      {
        path: 'recover-password',
        element: <PasswordRecoveryPage />,
      },
    ],
  },
])

function ProtectedRoutes() {
  const { data, isLoading } = useGetMeQuery()

  if (isLoading) return <div>Loading...</div>

  return data ? <Outlet /> : <Navigate to="/login" />
}
