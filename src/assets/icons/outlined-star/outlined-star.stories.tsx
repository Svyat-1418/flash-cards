import { Meta, StoryObj } from '@storybook/react'

import { OutlinedStar } from './'

const meta = {
  title: 'Icons/Outlined Star',
  component: OutlinedStar,
} satisfies Meta<typeof OutlinedStar>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
