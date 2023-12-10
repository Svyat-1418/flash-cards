import { Meta, StoryObj } from '@storybook/react'

import { deckContent } from './decks-list/deck-table/deck-fake-data.ts'
import { DecksListContent } from './decks-list-content.tsx'

const meta = {
  title: 'Pages/DecksListContent',
  component: DecksListContent,
} satisfies Meta<typeof DecksListContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    userId: '1erf23',
    deckContent,
    showMyDecks: false,
    changeCurrentPage: () => {},
    setSliderValues: () => {},
    setShowMyDecks: () => {},
    searchDeck: () => {},
    addPackModalIsOpen: false,
    editPackModalIsOpen: false,
    setEditPackModalIsOpen: () => {},
    setAddPackModalIsOpen: () => {},
    deletePackModalIsOpen: false,
    setDeletePackModalIsOpen: () => {},
    addDeck: () => {},
    deleteDeck: () => {},
    updateDeck: () => {},
    editingDeck: deckContent[0],
    setEditingDeck: () => {},
    pagination: {
      currentPage: 1,
      itemsPerPage: 10,
      totalPages: 11,
      totalItems: 105,
    },
    sliderRangeValues: [0, 100],
    sliderValues: [0, 100],
    setSliderRangeValues: () => {},
    handleSort: () => {},
    setItemsPerPage: () => {},
    handleSetAuthorId: () => {},
    setClearFilter: () => {},
    sort: { key: 'name', direction: 'asc' },
  },
}
