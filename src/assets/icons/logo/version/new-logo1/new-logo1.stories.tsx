import { Meta, StoryObj } from '@storybook/react'

import { NewLogo1 } from './NewLogo1.tsx'

const meta = {
  title: 'Icons/New Logo1',
  component: NewLogo1,
} satisfies Meta<typeof NewLogo1>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
