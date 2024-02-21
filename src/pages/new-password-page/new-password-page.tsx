import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useNewPasswordMutation } from '@/services/auth/auth-endpoints'
import { NewPassword } from '@widgets/auth/new-password'

export const NewPasswordPage = () => {
  const { token } = useParams()
  const [createNewPassword] = useNewPasswordMutation()
  const navigate = useNavigate()
  const createNewPasswordHandle = (password: string) => {
    if (token) {
      return createNewPassword({ token, password })
        .unwrap()
        .then(() => {
          toast.success('Пароль успешно изменен')
          navigate('/login')
        })
        .catch(() => toast.error('error'))
    }
  }

  return <NewPassword onSubmit={createNewPasswordHandle} />
}
