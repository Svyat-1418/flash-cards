import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from './forgot-password.tsx'

const meta = {
  title: 'Auth/ForgotPassword',
  component: ForgotPassword,
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
