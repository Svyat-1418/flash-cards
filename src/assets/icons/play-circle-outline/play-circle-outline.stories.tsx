import { Meta, StoryObj } from '@storybook/react'

import { OutlinedPlayCircle } from './'

const meta = {
  title: 'Icons/Outlined Play Circle',
  component: OutlinedPlayCircle,
} satisfies Meta<typeof OutlinedPlayCircle>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
