import { Meta, StoryObj } from '@storybook/react'

import { ArrowDoubleSort } from './'

const meta = {
  title: 'Icons/Arrow Double Sort',
  component: ArrowDoubleSort,
} satisfies Meta<typeof ArrowDoubleSort>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
