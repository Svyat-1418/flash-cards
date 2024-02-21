import type { Meta, StoryObj } from '@storybook/react'

import { deckContent } from './deck-fake-data'
import { DeckTable } from './deck-table'

const meta = {
  title: 'Table/Deck Table',
  component: DeckTable,
  tags: ['autodocs'],
} satisfies Meta<typeof DeckTable>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {
    deckContent,
    userId: '',
    sort: { key: 'name', direction: 'asc' },
    handleSort: () => {},
    deleteDeck: () => {},
    editDeck: () => {},
  },
}
