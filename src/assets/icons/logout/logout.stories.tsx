import { Meta, StoryObj } from '@storybook/react'

import { Logout } from './'

const meta = {
  title: 'Icons/Logout',
  component: Logout,
} satisfies Meta<typeof Logout>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
