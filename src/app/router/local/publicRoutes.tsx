import { RouteObject } from 'react-router-dom'

import { CheckEmailPage } from '@pages/check-email-page'
import { LoginPage } from '@pages/login-page'
import { NewPasswordPage } from '@pages/new-password-page'
import { PasswordRecoveryPage } from '@pages/password-recovery-page'
import { SignUpPage } from '@pages/sign-up-page'
import { PATH } from '@shared/constants/router-path'

export const publicRoutes: RouteObject[] = [
  {
    path: PATH.LOGIN,
    element: <LoginPage />,
  },
  {
    path: PATH.REGISTER,
    element: <SignUpPage />,
  },
  {
    path: PATH.RECOVERY_PASSWORD,
    element: <PasswordRecoveryPage />,
  },
  {
    path: PATH.CHECK_EMAIL,
    element: <CheckEmailPage />,
  },
  {
    path: PATH.CREATE_NEW_PASSWORD,
    element: <NewPasswordPage />,
  },
]
