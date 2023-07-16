import { createBrowserRouter } from 'react-router-dom'

import { App } from '../App.tsx'

import Error404 from './error404.tsx'
import { Login } from './login'
import { ProfilePage } from './profile'
import { SignUp } from './sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
  },

  {
    path: 'profile',
    element: <ProfilePage />,
  },
  // {
  //   path: 'packs',
  //   element: <Packs />,
  // },
  // {
  //   path: 'cards',
  //   element: <Cards />,
  // },
  // {
  //   path: 'learn',
  //   element: <Learn />,
  // },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'registration',
    element: <SignUp />,
  },
  // {
  //   path: 'check-email',
  //   element: <CheckEmail />,
  // },
  // {
  //   path: 'set-new-password',
  //   element: <NewPassword />,
  // },
  // {
  //   path: 'forgot-password',
  //   element: <ForgotPassword />,
  // },
])
