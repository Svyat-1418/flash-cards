import { clsx } from 'clsx'

import { Edit } from '../../../assets/icons/edit'
import { Avatar } from '../../../components/ui/avatar-with-fallback'
import { Button } from '../../../components/ui/button'
import { Uploader } from '../../../components/ui/uploader'
import { UpdateMeArgs } from '../../../services/auth/types.ts'

import s from './avatar-uploader.module.scss'

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
        <Uploader className={s.uploader} onLoadCover={handleLoadImage} onLoadError={() => {}}>
          <Button asChild className={s.editIcon}>
            <Edit />
          </Button>
        </Uploader>
      )}
    </div>
  )
}
