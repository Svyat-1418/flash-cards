import {
  AddDeckRequestType,
  Deck,
  PaginationType,
  UpdateDeckRequestType,
} from '../../services/decks/types.ts'
import { ContentContainer } from '../ui/content-container'

import { DecksList } from './decks-list/decks-list.tsx'
import { DecksListPanel } from './decks-list-panel/decks-list-panel.tsx'

export type DecksPropsType = {
  userId: string | undefined
  deckContent: Deck[] | undefined
  pagination: PaginationType | undefined
  changeCurrentPage: (page: number) => void
  setShowMyDecks: (value: boolean) => void
  showMyDecks: boolean
  sliderValues: number[]
  sliderRangeValues: number[]
  setSliderRangeValues: (values: number[]) => void
  setSliderValues: () => void
  searchDeck: (decksName: string) => void
  addPackModalIsOpen: boolean
  setAddPackModalIsOpen: (value: boolean) => void
  editPackModalIsOpen: boolean
  setEditPackModalIsOpen: (value: boolean) => void
  deletePackModalIsOpen: boolean
  setDeletePackModalIsOpen: (value: boolean) => void
  addDeck: (args: AddDeckRequestType) => void
  deleteDeck: (id: string) => void
  updateDeck: (args: UpdateDeckRequestType) => void
  editingDeck: Deck | null
  setEditingDeck: (item: Deck | null) => void
  setClearFilter: () => void
}

export const DecksListContent = ({
  userId,
  deckContent = [],
  pagination,
  changeCurrentPage,
  setShowMyDecks,
  showMyDecks,
  sliderValues,
  sliderRangeValues,
  setSliderValues,
  setSliderRangeValues,
  searchDeck,
  addPackModalIsOpen,
  setAddPackModalIsOpen,
  editPackModalIsOpen,
  setEditPackModalIsOpen,
  deletePackModalIsOpen,
  setDeletePackModalIsOpen,
  addDeck,
  deleteDeck,
  updateDeck,
  editingDeck,
  setEditingDeck,
  setClearFilter,
}: DecksPropsType) => {
  return (
    <ContentContainer>
      <DecksListPanel
        addDeck={addDeck}
        searchDeck={searchDeck}
        setSliderRangeValues={setSliderRangeValues}
        sliderValues={sliderValues}
        setShowMyDecks={setShowMyDecks}
        setAddPackModalIsOpen={setAddPackModalIsOpen}
        setSliderValues={setSliderValues}
        sliderRangeValues={sliderRangeValues}
        addPackModalIsOpen={addPackModalIsOpen}
        showMyDecks={showMyDecks}
        setClearFilter={setClearFilter}
      />
      <DecksList
        deckContent={deckContent}
        userId={userId}
        pagination={pagination}
        changeCurrentPage={changeCurrentPage}
        editingDeck={editingDeck}
        deletePackModalIsOpen={deletePackModalIsOpen}
        editPackModalIsOpen={editPackModalIsOpen}
        setEditPackModalIsOpen={setEditPackModalIsOpen}
        updateDeck={updateDeck}
        setDeletePackModalIsOpen={setDeletePackModalIsOpen}
        deleteDeck={deleteDeck}
        setEditingDeck={setEditingDeck}
      />
    </ContentContainer>
  )
}
