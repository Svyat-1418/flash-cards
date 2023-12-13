import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import AddPicture from '../../../../../assets/icons/add-picture/add-picture.tsx'
import { Button } from '../../../../ui/button'
import { ControlledTextField } from '../../../../ui/controlled'
import { Cover } from '../../../../ui/cover/cover.tsx'
import { Modal } from '../../../../ui/modal'
import { Typography } from '../../../../ui/typography'
import { Uploader } from '../../../../ui/uploader'

import s from './add-new-card.modal.module.scss'

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
