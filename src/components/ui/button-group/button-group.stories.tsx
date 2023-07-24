import { Meta, StoryObj } from '@storybook/react'

import { ButtonGroup } from './button-group.tsx'

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    buttons: [
      {
        title: 'My Cards',
        active: false,
        callback: () => {},
      },
      {
        title: 'All Cards',
        active: false,
        callback: () => {},
      },
      {
        title: 'Some Button',
        active: true,
        callback: () => {},
      },
    ],
  },
}
