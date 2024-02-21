import { Meta, StoryObj } from '@storybook/react'

import { VisibilityOff } from './visibility-off'

const meta = {
  title: 'Icons/Visibility Off',
  component: VisibilityOff,
} satisfies Meta<typeof VisibilityOff>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
