import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useSignUpMutation } from '@/services/auth/auth-endpoints'
import type { LoginArgs } from '@/services/auth/types'
import { SignUp } from '@/widgets/auth/sign-up'

export const SignUpPage = () => {
  const [login] = useSignUpMutation()
  const navigate = useNavigate()
  const handleSignUp = (args: LoginArgs) => {
    return login(args)
      .unwrap()
      .then(() => {
        toast.success('Signed up successfully')
        navigate('/login')
      })
      .catch((e: { data: { errorMessages: string[] } }) => toast.error(e.data.errorMessages[0]))
  }

  return <SignUp onSubmit={handleSignUp} />
}
