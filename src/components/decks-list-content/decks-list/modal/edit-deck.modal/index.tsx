import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../../../ui/button'
import { ControlledCheckbox, ControlledTextField } from '../../../../ui/controlled'
import { Modal } from '../../../../ui/modal'
import { Typography } from '../../../../ui/typography'

import s from './edit-deck.modal.module.scss'

const schema = z.object({
  name: z.string().trim().nonempty('Enter new title'),
  isPrivate: z.boolean(),
})

type FormType = z.infer<typeof schema>

type EditPackModalPropsType = {
  name?: string
  isPrivate?: boolean
  modalIsOpen: boolean
  setModalIsOpen: (value: boolean) => void
  onSubmit: (data: FormType) => void
}
export const EditPackModal = ({
  name = '',
  isPrivate = false,
  modalIsOpen,
  setModalIsOpen,
  onSubmit,
}: EditPackModalPropsType) => {
  const { handleSubmit, control, reset } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    values: {
      name: name,
      isPrivate: isPrivate,
    },
  })

  const onSubmitHandle = (args: FormType) => {
    onSubmit(args)
  }

  const cancelHandle = () => {
    reset()
    setModalIsOpen(false)
  }

  const editPack = handleSubmit(onSubmitHandle)

  return (
    <Modal
      open={modalIsOpen}
      onClose={() => setModalIsOpen(false)}
      showCloseButton
      title={
        <Typography variant={'h2'} as={'h2'}>
          Edit Pack
        </Typography>
      }
    >
      <form onSubmit={editPack}>
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
