import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import AddPicture from '../../../../../assets/icons/add-picture/add-picture.tsx'
import { appendDataToFormData } from '../../../../../shared/utils/append-data-to-form-data.ts'
import { processImageFile } from '../../../../../shared/utils/process-image-file.ts'
import { Button } from '../../../../ui/button'
import { ControlledCheckbox, ControlledTextField } from '../../../../ui/controlled'
import { Cover } from '../../../../ui/cover/cover.tsx'
import { Modal } from '../../../../ui/modal'
import { Typography } from '../../../../ui/typography'
import { Uploader } from '../../../../ui/uploader'

import s from './add-new-deck.modal.module.scss'

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
    debugger
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
          Add New Pack
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
