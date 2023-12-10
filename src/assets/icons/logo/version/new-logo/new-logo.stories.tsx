import { Meta, StoryObj } from '@storybook/react'

import { NewLogo } from './NewLogo.tsx'

const meta = {
  title: 'Icons/New Logo',
  component: NewLogo,
} satisfies Meta<typeof NewLogo>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
