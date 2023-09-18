import { useParams } from 'react-router-dom'

import { CheckEmail } from '../../components/auth/check-email'

export const CheckEmailPage = () => {
  const { email } = useParams()

  return <CheckEmail email={email ? email : ''} />
}
