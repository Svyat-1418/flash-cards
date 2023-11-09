import { Button } from '../../../components/ui/button'
import { ControlledTextField } from '../../../components/ui/controlled'

import s from './edit-profile.module.scss'
import { EditProfileValues, useEditProfile } from './useEditProfile'

type Props = {
  onSubmit: (data: EditProfileValues) => void
  initialValues?: EditProfileValues
}

export const EditProfile = ({ onSubmit, initialValues }: Props): JSX.Element => {
  const { control, handleSubmit } = useEditProfile(initialValues)

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <ControlledTextField className={s.input} name="name" control={control} label="Nickname" />
      <Button type="submit" fullWidth>
        Save Changes
      </Button>
    </form>
  )
}
