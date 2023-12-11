import { Meta, StoryObj } from '@storybook/react'

import { MoreIcon } from './more.tsx'

const meta = {
  title: 'Icons/MoreIcon',
  component: MoreIcon,
} satisfies Meta<typeof MoreIcon>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
