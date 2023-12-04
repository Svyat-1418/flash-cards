import { FC } from 'react'

import { Card, CreateCardDto, DeleteCardArgs, UpdateCardArgs } from '../../services/cards/types.ts'
import { Pagination as EntityPagination } from '../../services/common.types.ts'
import { GoBack } from '../ui/go-back'

import { Sort } from './cards-list/card-table'
import { CardsList } from './cards-list/cards-list.tsx'
import { DeckPanel } from './deck-panel/deck-panel.tsx'

export const DeckContent: FC<Props> = ({
  name,
  cover,
  cardsData,
  changeCurrentPage,
  pagination,
  searchCard,
  isAuthor,
  createCard,
  loadingCreateCard,
  updateCard,
  deleteCard,
  sort,
  handleSort,
}) => {
  return (
    <div>
      <GoBack title={'Back to Decks List'} />
      <DeckPanel
        name={name}
        cover={cover}
        isAuthor={isAuthor}
        searchCard={searchCard}
        createCard={createCard}
        loadingCreateCard={loadingCreateCard}
      />
      <CardsList
        sort={sort}
        handleSort={handleSort}
        cardsData={cardsData}
        isAuthor={isAuthor}
        pagination={pagination}
        changeCurrentPage={changeCurrentPage}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    </div>
  )
}

type Props = {
  name: string
  cover: string
  cardsData: Card[]
  isAuthor: boolean
  pagination: EntityPagination
  searchCard: (cardName: string) => void
  changeCurrentPage: (page: number) => void
  loadingCreateCard: boolean
  createCard: (args: CreateCardDto) => Promise<any>
  updateCard: (args: UpdateCardArgs) => Promise<any>
  deleteCard: (args: DeleteCardArgs) => Promise<any>
  sort: Sort
  handleSort: (sort: Sort) => void
}
