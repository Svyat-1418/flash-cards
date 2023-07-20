import { Meta, StoryObj } from '@storybook/react'

import { Edit } from './'

const meta = {
  title: 'Icons/Edit',
  component: Edit,
} satisfies Meta<typeof Edit>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
