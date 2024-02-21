import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './add-new-deck.modal.module.scss'

import { Modal } from '@/shared/ui-kit/modal'
import { Typography } from '@/shared/ui-kit/typography'
import { appendDataToFormData } from '@/shared/utils/append-data-to-form-data'
import { processImageFile } from '@/shared/utils/process-image-file'
import { AddPicture } from '@shared/assets/icons/add-picture'
import { Button } from '@shared/ui-kit/button'
import { ControlledCheckbox, ControlledTextField } from '@shared/ui-kit/controlled'
import { Cover } from '@shared/ui-kit/cover/cover'
import { Uploader } from '@shared/ui-kit/uploader'

const schema = z.object({
  name: z.string().trim().nonempty('Enter pack name'),
  isPrivate: z.boolean(),
})

type FormType = z.infer<typeof schema>

type AddNewPackModalPropsType = {
  modalIsOpen: boolean
  setModalIsOpen: (value: boolean) => void
  onSubmit: (args: FormData) => void
}
export const AddNewDeckModal = ({
  modalIsOpen,
  setModalIsOpen,
  onSubmit,
}: AddNewPackModalPropsType) => {
  const { handleSubmit, control, reset } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      name: '',
      isPrivate: false,
    },
  })
  const [cover, setCover] = useState('')
  const [coverFile, setCoverFile] = useState<Blob | string>('')

  const onSubmitHandle = (args: FormType) => {
    onSubmit(appendDataToFormData({ ...args, cover: coverFile }))
    reset()
    setCoverFile('')
    setCover('')
  }

  const addCover = async (file: File) => {
    try {
      const src = await processImageFile(file)

      setCoverFile(file)
      setCover(src)
    } catch (error) {
      console.error('Error processing image file:', error)
    }
  }

  const closeModal = () => {
    setCover('')
    setModalIsOpen(false)
  }

  const addNewPack = handleSubmit(onSubmitHandle)

  return (
    <Modal
      open={modalIsOpen}
      onClose={closeModal}
      showCloseButton
      title={
        <Typography variant={'h2'} as={'h2'}>
          Add New Deck
        </Typography>
      }
    >
      <div>
        {cover && <Cover src={cover} className={s.cover} />}
        <Uploader onLoadCover={addCover} onLoadError={() => {}}>
          <Button variant={'secondary'} fullWidth type={'button'}>
            <AddPicture />
            <span>Add Cover</span>
          </Button>
        </Uploader>
      </div>
      <form onSubmit={addNewPack}>
        <ControlledTextField control={control} name={'name'} label={'Add new pack'} />
        <ControlledCheckbox
          control={control}
          name={'isPrivate'}
          label={'Private pack'}
          className={s.checkbox}
        />
        <div className={s.buttonContainer}>
          <Button variant={'secondary'} onClick={closeModal}>
            Cancel
          </Button>
          <Button variant={'primary'} type={'submit'}>
            Add New Pack
          </Button>
        </div>
      </form>
    </Modal>
  )
}
