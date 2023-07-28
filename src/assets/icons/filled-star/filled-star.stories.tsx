import { Meta, StoryObj } from '@storybook/react'

import { FilledStar } from './'

const meta = {
  title: 'Icons/Filled Star',
  component: FilledStar,
} satisfies Meta<typeof FilledStar>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
