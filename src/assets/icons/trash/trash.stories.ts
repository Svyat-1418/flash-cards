import { Meta, StoryObj } from '@storybook/react'

import { Trash } from './'

const meta = {
  title: 'Icons/Trash',
  component: Trash,
} satisfies Meta<typeof Trash>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
