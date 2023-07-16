import type { Meta, StoryObj } from '@storybook/react'

import { DeckTable } from './deck-table.tsx'

const meta = {
  title: 'Table/Deck Table',
  component: DeckTable,
  tags: ['autodocs'],
} satisfies Meta<typeof DeckTable>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {}
