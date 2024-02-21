import { FC, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './update-deck.module.scss'

import { AddPicture } from '@/shared/assets/icons/add-picture/add-picture'
import { Button } from '@/shared/ui-kit/button'
import { ControlledCheckbox, ControlledTextField } from '@/shared/ui-kit/controlled'
import { Cover } from '@/shared/ui-kit/cover/cover'
import { Modal } from '@/shared/ui-kit/modal'
import { Typography } from '@/shared/ui-kit/typography'
import { Uploader } from '@/shared/ui-kit/uploader'

const schema = z.object({
  name: z.string().trim().nonempty('Enter new title'),
  isPrivate: z.boolean(),
})

type FormType = z.infer<typeof schema>

type Props = {
  name?: string
  isPrivate?: boolean
  modalIsOpen: boolean
  setModalIsOpen: (value: boolean) => void
  onSubmit: (data: FormType) => void
  cover: string
}
export const UpdateDeckModal: FC<Props> = ({
  name = '',
  isPrivate = false,
  modalIsOpen,
  setModalIsOpen,
  onSubmit,
  cover,
}) => {
  const [localCover, setLocalCover] = useState<File | null>(null)

  let coverUrl = ''

  const { handleSubmit, control, reset } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    values: {
      name: name,
      isPrivate: isPrivate,
    },
  })

  const onSubmitHandle = (args: FormType) => {
    const updateDeckPayload = localCover ? { cover: localCover, ...args } : args

    onSubmit(updateDeckPayload)
    URL.revokeObjectURL(coverUrl)
  }

  const cancelHandle = () => {
    reset()
    setModalIsOpen(false)
  }

  const onLoadCover = (data: File) => {
    setLocalCover(data)
  }

  coverUrl = localCover ? URL.createObjectURL(localCover) : cover

  const editPack = handleSubmit(onSubmitHandle)

  return (
    <Modal
      open={modalIsOpen}
      onClose={() => setModalIsOpen(false)}
      showCloseButton
      title={
        <Typography variant={'h2'} as={'h2'}>
          Edit Deck
        </Typography>
      }
    >
      <form onSubmit={editPack}>
        <div>
          {cover && <Cover src={coverUrl} className={s.cover} />}
          <Uploader onLoadCover={onLoadCover} onLoadError={() => {}}>
            <Button variant={'secondary'} fullWidth type={'button'}>
              <AddPicture />
              <span>Update Cover</span>
            </Button>
          </Uploader>
        </div>
        <ControlledTextField control={control} name={'name'} label={'Name Pack'} />
        <ControlledCheckbox
          control={control}
          name={'isPrivate'}
          label={'Private pack'}
          className={s.checkbox}
        />
        <div className={s.buttonContainer}>
          <Button variant={'secondary'} onClick={cancelHandle}>
            Cancel
          </Button>
          <Button variant={'primary'} type={'submit'}>
            Save Changes
          </Button>
        </div>
      </form>
    </Modal>
  )
}
