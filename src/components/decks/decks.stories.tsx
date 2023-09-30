import { Meta, StoryObj } from '@storybook/react'

import { deckContent } from './deck-table/deck-fake-data.ts'
import { DecksListContent } from './decks-list-content.tsx'

const meta = {
  title: 'Pages/Decks',
  component: DecksListContent,
} satisfies Meta<typeof DecksListContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    deckContent,
    showMyDecks: false,
    changeCurrentPage: () => {},
    setSliderValues: () => {},
    setShowMyDecks: () => {},
    pagination: {
      currentPage: 1,
      itemsPerPage: 10,
      totalPages: 11,
      totalItems: 105,
    },
    sliderRangeValues: [0, 100],
    sliderValues: [0, 100],
    setSliderRangeValues: () => {},
  },
}
