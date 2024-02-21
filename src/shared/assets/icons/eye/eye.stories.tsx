import { Meta, StoryObj } from '@storybook/react'

import { Eye } from './eye'

const meta = {
  title: 'Icons/Eye',
  component: Eye,
} satisfies Meta<typeof Eye>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
