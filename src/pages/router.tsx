import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'

import { Layout } from '../components/layout'
import { useMeQuery } from '../services/auth/auth-endpoints.ts'

import { CheckEmailPage } from './check-email.page/check-email.page.tsx'
import { DeckPage } from './deck-page'
import { DecksListPage } from './decks-list.page'
import Error404Page from './error404.page/error404.page.tsx'
import { LoginPage } from './login.page'
import { NewPasswordPage } from './new-password.page/new-password.page.tsx'
import { PasswordRecoveryPage } from './password-recovery.page'
import { ProfilePage } from './profile.page'
import { SignUpPage } from './sign-up.page'
export const PATH = {
  HOME: '/',
  DECKS_LIST_PAGE: 'decks-list-page',
  DECK_PAGE: 'cards/:deckId',
  LEARN: 'learn',
  PROFILE: 'profile',
  LOGIN: 'login',
  REGISTER: 'sign-up',
  RECOVERY_PASSWORD: 'recover-password',
  CHECK_EMAIL: 'check-email/:email?',
  CREATE_NEW_PASSWORD: 'new-password/:token',
}
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
            element: <DecksListPage />,
          },
          {
            path: 'cards/:deckId',
            element: <DeckPage />,
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
      {
        path: 'check-email/:email?',
        element: <CheckEmailPage />,
      },
      {
        path: 'new-password/:token',
        element: <NewPasswordPage />,
      },
    ],
  },
])

function ProtectedRoutes() {
  const { data, isLoading } = useMeQuery()

  if (isLoading) return <div>Loading...</div>

  return data ? <Outlet /> : <Navigate to="/login" />
}
