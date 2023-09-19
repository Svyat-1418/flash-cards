import { ForgotPasswordArgs } from '../services/auth/types.ts'

export const recoverPasswordUtil = (email: string): ForgotPasswordArgs => {
  return {
    html: "<h1>Hi, ##name##</h1><p>Click <a href='http://localhost:5173/new-password/##token##'>here</a> to recover your password</p>",
    email,
    subject: 'Recover password',
  }
}
