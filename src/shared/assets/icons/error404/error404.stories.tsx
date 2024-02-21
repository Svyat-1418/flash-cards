import { Meta, StoryObj } from '@storybook/react'

import { Error404 } from './error404'

const meta = {
  title: 'Icons/Error404',
  component: Error404,
} satisfies Meta<typeof Error404>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
