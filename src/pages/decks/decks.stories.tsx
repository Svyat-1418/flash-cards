import { Meta, StoryObj } from '@storybook/react'

import { Decks } from './decks.tsx'

const meta = {
  title: 'Pages/Decks',
  component: Decks,
} satisfies Meta<typeof Decks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
