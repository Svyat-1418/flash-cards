import { Meta, StoryObj } from '@storybook/react'

import { Check } from '@shared/assets/icons/check'

const meta = {
  title: 'Icons/Check',
  component: Check,
} satisfies Meta<typeof Check>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
