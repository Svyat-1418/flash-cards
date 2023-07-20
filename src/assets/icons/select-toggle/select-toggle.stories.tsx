import { Meta, StoryObj } from '@storybook/react'

import { SelectToggle } from './'

const meta = {
  title: 'Icons/Select Toggle',
  component: SelectToggle,
} satisfies Meta<typeof SelectToggle>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
