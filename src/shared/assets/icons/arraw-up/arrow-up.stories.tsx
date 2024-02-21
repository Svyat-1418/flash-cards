import { Meta, StoryObj } from '@storybook/react'

import { ArrowUp } from './arrow-up'

const meta = {
  title: 'Icons/Arrow Up',
  component: ArrowUp,
} satisfies Meta<typeof ArrowUp>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
