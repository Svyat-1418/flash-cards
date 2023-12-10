import {
  AddDeckRequestType,
  Deck,
  PaginationType,
  UpdateDeckRequestType,
} from '../../services/decks/types.ts'
import { Sort } from '../deck-content/cards-list/card-table'
import { Container } from '../ui/container'

import { DecksList } from './decks-list/decks-list.tsx'
import { DecksListPanel } from './decks-list-panel/decks-list-panel.tsx'

export type DecksPropsType = {
  handleSetAuthorId: (authorId: string | undefined) => void
  sort: Sort
  handleSort: (sort: Sort) => void
  userId: string | undefined
  deckContent: Deck[] | undefined
  pagination: PaginationType | undefined
  setItemsPerPage: (value: string) => void
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
  editingDeck: Deck
  setEditingDeck: (item: Deck) => void
  setClearFilter: () => void
}

export const DecksListContent = ({
  sort,
  handleSort,
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
  handleSetAuthorId,
  setItemsPerPage,
}: DecksPropsType) => {
  return (
    <Container>
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
        userId={userId}
        handleSetAuthorId={handleSetAuthorId}
      />
      <DecksList
        sort={sort}
        handleSort={handleSort}
        deckContent={deckContent}
        userId={userId}
        pagination={pagination}
        setItemsPerPage={setItemsPerPage}
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
    </Container>
  )
}
