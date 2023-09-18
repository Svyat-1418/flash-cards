import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ForgotPassword } from '../../components/auth/forgot-password'
import { useForgotPasswordMutation } from '../../services/auth/auth-endpoints.ts'
import { recoverPasswordUtil } from '../../utils/recover-password.util.ts'

export const PasswordRecoveryPage = () => {
  const navigate = useNavigate()
  const [recoverPassword] = useForgotPasswordMutation()

  const recoverPasswordHandle = (email: string) => {
    const data = recoverPasswordUtil(email)

    //todo  data -> Bad request??
    console.log(data)

    return recoverPassword(data)
      .unwrap()
      .then(() => {
        navigate(`check-email/${email}`)
      })
      .catch(() => {
        toast.error('ERROR')
      })
  }

  return <ForgotPassword onSubmit={recoverPasswordHandle} />
}
