import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { ControlledCheckbox, ControlledTextField } from '../../ui/controlled'
import { Modal } from '../../ui/modal'
import { Typography } from '../../ui/typography'

const schema = z.object({
  newPack: z.string().trim().nonempty('Enter pack name'),
  privatePack: z.boolean(),
})

type FormType = z.infer<typeof schema>

type AddNewPackModalPropsType = {
  modalIsOpen: boolean
  setModalIsOpen: (value: boolean) => void
  onSubmit: (data: FormType) => void
}
export const AddNewPackModal = ({
  modalIsOpen,
  setModalIsOpen,
  onSubmit,
}: AddNewPackModalPropsType) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      newPack: '',
      privatePack: false,
    },
  })

  const addNewPack = handleSubmit(onSubmit)

  return (
    <Modal
      open={modalIsOpen}
      onClose={() => setModalIsOpen(false)}
      showCloseButton
      title={
        <Typography variant={'h2'} as={'h2'}>
          Add New Pack
        </Typography>
      }
    >
      <form onSubmit={addNewPack}>
        <ControlledTextField control={control} name={'newPack'} label={'Add new pack'} />
        <ControlledCheckbox control={control} name={'privatePack'} label={'Private pack'} />
        <Button variant={'secondary'} onClick={() => setModalIsOpen(false)}>
          Cancel
        </Button>
        <Button variant={'primary'} type={'submit'}>
          Add New Pack
        </Button>
      </form>
    </Modal>
  )
}
