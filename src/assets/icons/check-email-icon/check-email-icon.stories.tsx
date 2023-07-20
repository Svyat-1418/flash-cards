import { Meta, StoryObj } from '@storybook/react'

import { CheckEmailIcon } from './'

const meta = {
  title: 'Icons/Check Email Icon',
  component: CheckEmailIcon,
} satisfies Meta<typeof CheckEmailIcon>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
