import { Meta, StoryObj } from '@storybook/react'

import { Logo } from './logo'

const meta = {
  title: 'Icons/New Logo1',
  component: Logo,
} satisfies Meta<typeof Logo>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
