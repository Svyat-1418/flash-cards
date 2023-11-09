import { Profile } from '../../components/auth/profile'
import { GoBack } from '../../components/ui/go-back'
import {
  useLogoutMutation,
  useMeQuery,
  useUpdateMeMutation,
} from '../../services/auth/auth-endpoints.ts'
import { UpdateMeArgs } from '../../services/auth/types.ts'

export const ProfilePage = () => {
  const { data: me } = useMeQuery()
  const [updateMe] = useUpdateMeMutation()
  const [logout] = useLogoutMutation()

  const handleUpdateMe = (data: Pick<UpdateMeArgs, 'name' | 'avatar'>) => {
    debugger
    const formData = new FormData()

    Object.keys(data).forEach(key => {
      formData.append(key, data[key as keyof Omit<UpdateMeArgs, 'email'>])
    })

    console.log(formData)

    updateMe(formData)
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
