import { Meta, StoryObj } from '@storybook/react'

import { Logo } from './'

const meta = {
  title: 'Icons/Logo',
  component: Logo,
} satisfies Meta<typeof Logo>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
