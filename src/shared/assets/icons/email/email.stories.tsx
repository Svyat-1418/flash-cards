import { Meta, StoryObj } from '@storybook/react'

import { Email } from './email'

const meta = {
  title: 'Icons/Email',
  component: Email,
} satisfies Meta<typeof Email>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
