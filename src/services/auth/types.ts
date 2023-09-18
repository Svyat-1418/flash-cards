import { Nullable } from '../../types/common.types.ts'

export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}
export type LoginResponse = {
  accessToken: string
}

export type MeResponse = {
  email: string
  name: string
  id: string
  isEmailVerified: boolean
  avatar: Nullable<string>
  created: string
  updated: string
}
export type SignUpArgs = {
  html?: string
  name?: string
  password: string
  email: string
  subject?: string
  sendConfirmationEmail?: boolean
}
export type SignUpResponse = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

export type User = {
  id: string
  email: string
  name: string
  isEmailVerified: boolean
  avatar: string
}

export type ForgotPasswordArgs = {
  html?: string
  email: string
  subject?: string
}

export type NewPasswordArgs = {
  token: string
  password: string
}
