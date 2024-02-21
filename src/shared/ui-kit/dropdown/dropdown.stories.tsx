import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from './dropdown'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    dropdownElements: [
      <div key={1}>Elem 1</div>,
      <div key={2}>Elem 2</div>,
      <div key={3}>Elem 3</div>,
      <div key={4}>Elem 4</div>,
    ],
    trigger: <span>Open DropDown</span>,
  },
}
