import { FC } from 'react'

import { CardsList } from './cards-list/cards-list'
import { DeckPanel } from './deck-panel/deck-panel'

import type { Card, CreateCardDto, DeleteCardArgs, UpdateCardArgs } from '@/services/cards/types'
import { Pagination as EntityPagination } from '@/services/common.types'
import { UpdateDeckRequestType } from '@/services/decks/types'
import { Container } from '@/shared/ui-kit/container'
import { GoBack } from '@/shared/ui-kit/go-back'
import { Sort } from '@shared/types/sort'

export const DeckContent: FC<Props> = ({
  deckId,
  name,
  cover,
  cardsData,
  changeCurrentPage,
  pagination,
  changeItemsPerPage,
  searchCard,
  isAuthor,
  createCard,
  loadingCreateCard,
  updateCard,
  deleteCard,
  sort,
  handleSort,
  deleteDeckModalIsOpen,
  setDeletePackModalIsOpen,
  deleteDeck,
  updateDeck,
  setEditPackModalIsOpen,
  editPackModalIsOpen,
}) => {
  return (
    <Container>
      <GoBack title={'Back to Decks List'} />
      <DeckPanel
        deckId={deckId}
        cardsData={cardsData}
        name={name}
        cover={cover}
        isAuthor={isAuthor}
        searchCard={searchCard}
        createCard={createCard}
        loadingCreateCard={loadingCreateCard}
        deleteDeckModalIsOpen={deleteDeckModalIsOpen}
        setDeletePackModalIsOpen={setDeletePackModalIsOpen}
        deleteDeck={deleteDeck}
        updateDeck={updateDeck}
        setEditPackModalIsOpen={setEditPackModalIsOpen}
        editPackModalIsOpen={editPackModalIsOpen}
      />
      <CardsList
        sort={sort}
        handleSort={handleSort}
        cardsData={cardsData}
        isAuthor={isAuthor}
        pagination={pagination}
        changeItemsPerPage={changeItemsPerPage}
        changeCurrentPage={changeCurrentPage}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    </Container>
  )
}

type Props = {
  deckId: string
  name: string
  cover: string
  cardsData: Card[]
  isAuthor: boolean
  pagination: EntityPagination
  changeItemsPerPage: (value: string) => void
  searchCard: (cardName: string) => void
  changeCurrentPage: (page: number) => void
  loadingCreateCard: boolean
  createCard: (args: CreateCardDto) => Promise<any>
  updateCard: (args: UpdateCardArgs) => Promise<any>
  deleteCard: (args: DeleteCardArgs) => Promise<any>
  sort: Sort
  handleSort: (sort: Sort) => void
  deleteDeckModalIsOpen: boolean
  setDeletePackModalIsOpen: (isOpen: boolean) => void
  deleteDeck: (id: string) => void
  updateDeck: (args: UpdateDeckRequestType) => void
  setEditPackModalIsOpen: (isOpen: boolean) => void
  editPackModalIsOpen: boolean
}
