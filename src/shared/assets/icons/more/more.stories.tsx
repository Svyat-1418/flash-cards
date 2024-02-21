import { Meta, StoryObj } from '@storybook/react'

import { More } from './more'

const meta = {
  title: 'Icons/MoreIcon',
  component: More,
} satisfies Meta<typeof More>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
