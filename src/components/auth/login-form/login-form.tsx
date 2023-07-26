import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledCheckbox, ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './login-form.module.scss'

const schema = z.object({
  email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
})

type FormType = z.infer<typeof schema>
type Props = {
  onSubmit: (data: FormType) => void
}
export const LoginForm = (props: Props) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const handleFormSubmitted = handleSubmit(props.onSubmit)

  return (
    <>
      <Card className={s.card}>
        <Typography variant="large" as={'h1'}>
          Sign in
        </Typography>
        <form onSubmit={handleFormSubmitted}>
          <ControlledTextField
            label="Email"
            name={'email'}
            control={control}
            containerProps={{ className: s.textField }}
          />
          <ControlledTextField
            label="password"
            name={'password'}
            control={control}
            containerProps={{ className: s.textField }}
          />
          <ControlledCheckbox
            label={'Remember me'}
            name={'rememberMe'}
            control={control}
            className={s.checkbox}
            position={'left'}
          />

          <Typography variant="body2" as={Link} to="/recover-password" className={s.forgotPassword}>
            Forgot password?
          </Typography>

          <Button type={'submit'} fullWidth>
            Submit
          </Button>
        </form>
        <Typography variant="body2" className={s.noAccount}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account?
        </Typography>
        <Typography variant="link1" as={Link} to="/sign-up" className={s.signUpLink}>
          Sign Up
        </Typography>
      </Card>
    </>
  )
}
