import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import AddPicture from '../../../../../assets/icons/add-picture/add-picture.tsx'
import { Card, UpdateCardArgs } from '../../../../../services/cards/types.ts'
import { appendDataToFormData } from '../../../../../shared/utils/append-data-to-form-data.ts'
import { Button } from '../../../../ui/button'
import { ControlledTextField } from '../../../../ui/controlled'
import { Cover } from '../../../../ui/cover/cover.tsx'
import { Modal } from '../../../../ui/modal'
import { Typography } from '../../../../ui/typography'
import { Uploader } from '../../../../ui/uploader'

import s from './update-card.module.scss'

type EditCardModalPropsType = {
  editingCard: Card | null
  modalIsOpen: boolean
  closeModal: () => void
  onSubmit: (args: UpdateCardArgs) => Promise<any>
}
const schema = z.object({
  question: z.string().trim().nonempty('Enter question'),
  answer: z.string().trim().nonempty('Enter answer'),
})

type FormType = z.infer<typeof schema>

export const UpdateCardModal = ({
  editingCard,
  modalIsOpen,
  closeModal,
  onSubmit,
}: EditCardModalPropsType) => {
  const [questionImg, setQuestionImg] = useState<File | null>(null)

  let questionImageUrl = ''

  const { handleSubmit, control, reset } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    values: {
      question: editingCard?.question ?? '',
      answer: editingCard?.answer ?? '',
    },
  })

  const onSubmitHandle = (args: FormType) => {
    const updateCardPayload = questionImg
      ? {
          questionImg: questionImg,
          ...args,
        }
      : args

    editingCard?.id &&
      onSubmit({
        deckId: editingCard.deckId,
        cardId: editingCard.id,
        body: appendDataToFormData(updateCardPayload),
      }).then(() => {
        URL.revokeObjectURL(questionImageUrl)
        closeModal()
      })
  }

  const cancelHandle = () => {
    closeModal()
    reset()
  }

  const onLoadQuestionImage = (data: File) => {
    setQuestionImg(data)
  }

  if (questionImg) {
    questionImageUrl = URL.createObjectURL(questionImg)
  }

  const addNewCard = handleSubmit(onSubmitHandle)

  return (
    <Modal
      open={modalIsOpen}
      showCloseButton
      title={
        <Typography variant={'h2'} as={'h2'}>
          Edit Card
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
              <span>Update Question Image</span>
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
            Edit Card
          </Button>
        </div>
      </form>
    </Modal>
  )
}
