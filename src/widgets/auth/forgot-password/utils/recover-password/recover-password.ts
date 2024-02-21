import { ForgotPasswordArgs } from '@services/auth/types'

export const recoverPassword = (email: string): ForgotPasswordArgs => {
  return {
    html: "<h1>Hi, ##name##</h1><p>Click <a href='http://localhost:5173/new-password/##token##'>here</a> to recover your password</p>",
    email,
    subject: 'Recover password',
  }
}
