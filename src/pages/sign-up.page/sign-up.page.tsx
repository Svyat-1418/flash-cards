import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignUp } from '../../components/auth/sign-up'
import { useSignUpMutation } from '../../services/auth/auth.ts'
import { LoginArgs } from '../../services/auth/types.ts'

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
      .catch(err => toast.error(err.data.message))
  }

  return <SignUp onSubmit={handleSignUp} />
}
