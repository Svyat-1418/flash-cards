import { Meta, StoryObj } from '@storybook/react'

import { ArrowDown } from './arraw-down.tsx'

const meta = {
  title: 'Icons/Arrow Down',
  component: ArrowDown,
} satisfies Meta<typeof ArrowDown>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
