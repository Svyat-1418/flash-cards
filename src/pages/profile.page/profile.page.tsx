import { Profile } from '../../components/auth/profile'
import { GoBack } from '../../components/ui/go-back'
import {
  useLogoutMutation,
  useMeQuery,
  useUpdateMeMutation,
} from '../../services/auth/auth-endpoints.ts'
import { UpdateMeArgs } from '../../services/auth/types.ts'
import { appendDataToFormData } from '../../shared/utils/append-data-to-form-data.ts'

export const ProfilePage = () => {
  const { data: me } = useMeQuery()
  const [updateMe] = useUpdateMeMutation()
  const [logout] = useLogoutMutation()

  const handleUpdateMe = (data: Pick<UpdateMeArgs, 'name' | 'avatar'>) => {
    updateMe(appendDataToFormData(data))
  }

  return (
    <>
      <GoBack title={'Back to Decks List'} />
      {me && (
        <Profile
          name={me.name}
          email={me.email}
          avatarSrc={me.avatar || undefined}
          handleUpdateMe={handleUpdateMe}
          logout={logout}
        />
      )}
    </>
  )
}
