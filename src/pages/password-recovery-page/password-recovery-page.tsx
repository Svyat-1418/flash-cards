import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { recoverPassword as recoverPasswordUtil } from '@/widgets/auth/forgot-password/utils/recover-password'
import { useForgotPasswordMutation } from '@services/auth/auth-endpoints'
import { ForgotPassword } from '@widgets/auth/forgot-password'

export const PasswordRecoveryPage = () => {
  const navigate = useNavigate()
  const [recoverPassword] = useForgotPasswordMutation()

  const recoverPasswordHandle = (email: string) => {
    const data = recoverPasswordUtil(email)

    return recoverPassword(data)
      .unwrap()
      .then(() => {
        navigate(`/check-email/${email}`)
      })
      .catch(() => {
        toast.error('ERROR')
      })
  }

  return <ForgotPassword onSubmit={recoverPasswordHandle} />
}
