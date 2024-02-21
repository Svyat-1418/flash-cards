import { useState } from 'react'

import s from './profile.module.scss'

import { ProfileInfo } from '@/pages/profile-page/profile-info'
import type { UpdateMeArgs } from '@/services/auth/types'
import { Card } from '@/shared/ui-kit/card'
import { Typography } from '@/shared/ui-kit/typography'
import { AvatarUploader } from '@pages/profile-page/avatar-uploader'
import { EditProfile, EditProfileValues } from '@pages/profile-page/edit-profile'

type ProfilePropsType = {
  avatarSrc?: string
  name: string
  email: string
  handleUpdateMe: (args: UpdateMeArgs) => void
  logout: () => void
}

export const Profile = ({ avatarSrc, name, email, handleUpdateMe, logout }: ProfilePropsType) => {
  const [editMode, setEditMode] = useState(false)

  const activateEditMode = () => {
    setEditMode(true)
  }

  const onSubmit = (data: EditProfileValues) => {
    handleUpdateMe(data)
    setEditMode(false)
  }

  return (
    <>
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'} as="h2">
          Personal Information
        </Typography>
        <AvatarUploader
          handleLoadImage={handleUpdateMe}
          className={s.avatarUploader}
          avatar={avatarSrc}
          name={name}
          isEditable={!editMode}
        />
        {editMode ? (
          <EditProfile onSubmit={onSubmit} initialValues={{ name }} />
        ) : (
          <ProfileInfo
            logout={logout}
            email={email}
            name={name}
            activateEditMode={activateEditMode}
          />
        )}
      </Card>
    </>
  )
}
