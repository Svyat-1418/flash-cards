export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type User = {
  id: string
  email: string
  name: string
  isEmailVerified: boolean
  avatar: string
}
