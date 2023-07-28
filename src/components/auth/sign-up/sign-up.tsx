import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { omit } from 'remeda'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './sign-up.module.scss'

const schema = z
  .object({
    email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
    password: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(5, 'Password must be at least 5 characters'),
    passwordConfirmation: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(5, 'Password must be at least 5 characters'),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirmation) {
      ctx.addIssue({
        message: 'Passwords do not match',
        code: z.ZodIssueCode.custom,
        path: ['passwordConfirmation'],
      })
    }

    return data
  })

type FormType = z.infer<typeof schema>
type Props = {
  onSubmit: (data: Omit<FormType, 'passwordConfirmation'>) => void
}
export const SignUp = (props: Props) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  })

  const handleFormSubmitted = handleSubmit(data =>
    props.onSubmit(omit(data, ['passwordConfirmation']))
  )

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'large'}>
        Sign Up
      </Typography>
      <form onSubmit={handleFormSubmitted}>
        <ControlledTextField
          control={control}
          name={'email'}
          label={'Email'}
          containerProps={{ className: s.textField }}
        />
        <ControlledTextField
          control={control}
          name={'password'}
          label={'Password'}
          type={'password'}
          containerProps={{ className: s.textField }}
        />
        <ControlledTextField
          control={control}
          name={'passwordConfirmation'}
          label={'Confirm Password'}
          type={'password'}
          containerProps={{ className: s.textField }}
        />
        <Button type={'submit'} fullWidth className={s.button}>
          Sign Up
        </Button>
      </form>
      <Typography variant={'body2'} className={s.description}>
        Already have an account?
      </Typography>
      <Typography variant="link1" as={Link} to="/login" className={s.signInLink}>
        Sign In
      </Typography>
    </Card>
  )
}
