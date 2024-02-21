import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './add-new-card.modal.module.scss'

import { Modal } from '@/shared/ui-kit/modal'
import { Uploader } from '@/shared/ui-kit/uploader'
import { AddPicture } from '@shared/assets/icons/add-picture'
import { Button } from '@shared/ui-kit/button'
import { ControlledTextField } from '@shared/ui-kit/controlled'
import { Cover } from '@shared/ui-kit/cover/cover'
import { Typography } from '@shared/ui-kit/typography'

type AddNewCardModalPropsType = {
  modalIsOpen: boolean
  closeModal: () => void
  onSubmit: <T>(args: FormType) => Promise<T>
}
const schema = z.object({
  question: z.string().trim().nonempty('Enter question'),
  answer: z.string().trim().nonempty('Enter answer'),
})

type FormType = z.infer<typeof schema>

export const AddNewCardModal = ({
  modalIsOpen,
  closeModal,
  onSubmit,
}: AddNewCardModalPropsType) => {
  const [questionImg, setQuestionImg] = useState<File | null>(null)

  let questionImageUrl = ''

  const { handleSubmit, control, reset } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
  })

  const onSubmitHandle = (args: FormType) => {
    const addCardPayload = questionImg
      ? {
          questionImg: questionImg,
          ...args,
        }
      : args

    onSubmit(addCardPayload).then(() => {
      URL.revokeObjectURL(questionImageUrl)
      closeModal()
    })
  }

  const cancelHandle = () => {
    closeModal()
    reset()
  }

  const addNewCard = handleSubmit(onSubmitHandle)

  const onLoadQuestionImage = (data: File) => {
    setQuestionImg(data)
  }

  if (questionImg) {
    questionImageUrl = URL.createObjectURL(questionImg)
  }

  return (
    <Modal
      open={modalIsOpen}
      showCloseButton
      title={
        <Typography variant={'h2'} as={'h2'}>
          Add New Card
        </Typography>
      }
      onClose={cancelHandle}
    >
      <form onSubmit={addNewCard}>
        <div>
          {questionImg && <Cover src={questionImageUrl} className={s.cover} />}
          <Uploader onLoadCover={onLoadQuestionImage} onLoadError={() => {}}>
            <Button variant={'secondary'} fullWidth type={'button'}>
              <AddPicture />
              <span>Add Question Image</span>
            </Button>
          </Uploader>
        </div>
        <div className={s.fields}>
          <ControlledTextField control={control} name={'question'} label={'Question'} />
          <ControlledTextField control={control} name={'answer'} label={'Answer'} />
        </div>
        <div className={s.buttonContainer}>
          <Button variant={'secondary'} onClick={cancelHandle}>
            Cancel
          </Button>
          <Button variant={'primary'} type={'submit'}>
            Add New Card
          </Button>
        </div>
      </form>
    </Modal>
  )
}
