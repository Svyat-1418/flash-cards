import { Meta, StoryObj } from '@storybook/react'

import { Close } from './close.tsx'

const meta = {
  title: 'Icons/Close Icon',
  component: Close,
} satisfies Meta<typeof Close>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {}
