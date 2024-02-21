import { DecksList } from './decks-list/decks-list'
import { DecksListPanel } from './decks-list-panel/decks-list-panel'

import {
  AddDeckRequestType,
  Deck,
  PaginationType,
  UpdateDeckRequestType,
} from '@/services/decks/types'
import { Container } from '@/shared/ui-kit/container'
import { Sort } from '@shared/types/sort'

export type DecksPropsType = {
  decksLoading: boolean
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
  decksLoading,
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
        decksLoading={decksLoading}
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
