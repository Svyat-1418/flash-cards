import { Profile } from '../../components/auth/profile'
import {
  useLogoutMutation,
  useMeQuery,
  useUpdateMeMutation,
} from '../../services/auth/auth-endpoints.ts'

export const ProfilePage = () => {
  const { data: me } = useMeQuery()
  const [updateMe] = useUpdateMeMutation()
  const [logout] = useLogoutMutation()
  const avatar = me?.avatar ? me.avatar : undefined

  return (
    <Profile
      name={me?.name}
      email={me?.email}
      avatarSrc={avatar}
      changeName={updateMe}
      logout={logout}
    />
  )
}
