import { Meta, StoryObj } from '@storybook/react'

import { BackToDecksList } from './back-to-decks-list.tsx'

const meta = {
  title: 'Components/Back to Decks List',
  component: BackToDecksList,
  tags: ['autodocs'],
} satisfies Meta<typeof BackToDecksList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
