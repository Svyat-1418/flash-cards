import { useLogoutMutation, useMeQuery, useUpdateMeMutation } from '@/services/auth/auth-endpoints'
import type { UpdateMeArgs } from '@/services/auth/types'
import { Container } from '@/shared/ui-kit/container'
import { GoBack } from '@/shared/ui-kit/go-back'
import { appendDataToFormData } from '@/shared/utils/append-data-to-form-data'
import { Profile } from '@/widgets/profile/profile'

export const ProfilePage = () => {
  const { data: me } = useMeQuery()
  const [updateMe] = useUpdateMeMutation()
  const [logout] = useLogoutMutation()

  const handleUpdateMe = (data: Pick<UpdateMeArgs, 'name' | 'avatar'>) => {
    updateMe(appendDataToFormData(data))
  }

  return (
    <Container>
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
    </Container>
  )
}
