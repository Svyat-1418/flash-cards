import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './new-password.module.scss'

import { Button } from '@/shared/ui-kit/button'
import { Card } from '@/shared/ui-kit/card'
import { ControlledTextField } from '@/shared/ui-kit/controlled'
import { Typography } from '@/shared/ui-kit/typography'

const schema = z.object({
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 characters'),
})

type Form = z.infer<typeof schema>

type Props = {
  onSubmit: (password: string) => void
}

export const NewPassword = (props: Props) => {
  const { control, handleSubmit } = useForm<Form>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues: {
      password: '',
    },
  })

  const onSubmit = handleSubmit(data => props.onSubmit(data.password))

  return (
    <>
      <Card className={s.card}>
        <Typography variant="large" className={s.title}>
          Create new password
        </Typography>
        <form onSubmit={onSubmit}>
          <ControlledTextField
            placeholder={'Password'}
            name={'password'}
            control={control}
            type={'password'}
            containerProps={{ className: s.input }}
          />
          <Typography variant="caption" className={s.caption}>
            Create new password and we will send you further instructions to email
          </Typography>
          <Button fullWidth type={'submit'}>
            Create New Password
          </Button>
        </form>
      </Card>
    </>
  )
}
