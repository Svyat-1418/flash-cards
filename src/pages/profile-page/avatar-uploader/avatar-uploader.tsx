import { clsx } from 'clsx'

import s from './avatar-uploader.module.scss'

import { UpdateMeArgs } from '@/services/auth/types'
import { Edit } from '@/shared/assets/icons/edit'
import { Button } from '@/shared/ui-kit/button'
import { Uploader } from '@/shared/ui-kit/uploader'
import { Avatar } from '@shared/ui-kit/avatar'

type Props = {
  avatar?: string
  name: string
  isEditable?: boolean
  className?: string
  handleLoadImage: (data: Pick<UpdateMeArgs, 'name' | 'avatar'>) => void
}

export const AvatarUploader = ({
  avatar,
  name,
  isEditable = true,
  handleLoadImage,
  className,
}: Props): JSX.Element => {
  const avatarUploaderClasses = clsx(s.root, className)

  return (
    <div className={avatarUploaderClasses}>
      <Avatar image={avatar} userName={name} size="large" />
      {isEditable && (
        <Uploader
          className={s.uploader}
          onLoadCover={(file: File) => handleLoadImage({ avatar: file })}
          onLoadError={() => {}}
        >
          <Button asChild className={s.editIcon}>
            <Edit />
          </Button>
        </Uploader>
      )}
    </div>
  )
}
