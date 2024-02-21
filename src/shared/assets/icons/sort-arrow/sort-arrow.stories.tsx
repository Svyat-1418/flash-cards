import { Meta, StoryObj } from '@storybook/react'

import { SortArrow } from './'

const meta = {
  title: 'Icons/Sort Arrow',
  component: SortArrow,
} satisfies Meta<typeof SortArrow>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
