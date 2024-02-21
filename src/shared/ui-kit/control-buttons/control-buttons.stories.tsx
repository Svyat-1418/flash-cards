import { Meta, StoryObj } from '@storybook/react'

import { ControlButtons } from './control-buttons'

const meta = {
  title: 'Components/ControlButtons',
  component: ControlButtons,
  tags: ['autodocs'],
} satisfies Meta<typeof ControlButtons>

export default meta
type Story = StoryObj<typeof meta>

export const Buttons: Story = {
  args: {
    toLearn: 'https://www.learn.com',
    isAdmin: true,
  },
}
