import { FC, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import AddPicture from '../../../../../assets/icons/add-picture/add-picture.tsx'
import { Button } from '../../../../ui/button'
import { ControlledCheckbox, ControlledTextField } from '../../../../ui/controlled'
import { Cover } from '../../../../ui/cover/cover.tsx'
import { Modal } from '../../../../ui/modal'
import { Typography } from '../../../../ui/typography'
import { Uploader } from '../../../../ui/uploader'

import s from './update-deck.module.scss'

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
}
export const UpdateDeckModal: FC<Props> = ({
  name = '',
  isPrivate = false,
  modalIsOpen,
  setModalIsOpen,
  onSubmit,
}) => {
  const [cover, setCover] = useState<File | null>(null)

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
    const updateDeckPayload = cover ? { cover, ...args } : args

    onSubmit(updateDeckPayload)
    URL.revokeObjectURL(coverUrl)
  }

  const cancelHandle = () => {
    reset()
    setModalIsOpen(false)
  }

  const onLoadCover = (data: File) => {
    setCover(data)
  }

  if (cover) {
    coverUrl = URL.createObjectURL(cover)
  }

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
