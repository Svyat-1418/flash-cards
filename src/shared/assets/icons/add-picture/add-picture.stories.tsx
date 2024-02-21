import { Meta, StoryObj } from '@storybook/react'

import { AddPicture } from './add-picture'

const meta = {
  title: 'Icons/Add Picture',
  component: AddPicture,
} satisfies Meta<typeof AddPicture>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
