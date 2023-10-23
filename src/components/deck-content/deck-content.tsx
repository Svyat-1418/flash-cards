import { FC } from 'react'

import { Card, CreateCardDto, DeleteCardArgs, UpdateCardArgs } from '../../services/cards/types.ts'
import { Pagination as EntityPagination } from '../../services/common.types.ts'

import { CardsList } from './cards-list/cards-list.tsx'
import { DeckPanel } from './deck-panel/deck-panel.tsx'

export const DeckContent: FC<Props> = ({
  name,
  cardsData,
  changeCurrentPage,
  pagination,
  searchCard,
  isAuthor,
  createCard,
  loadingCreateCard,
  updateCard,
  deleteCard,
}) => {
  return (
    <div>
      <DeckPanel
        name={name}
        isAuthor={isAuthor}
        searchCard={searchCard}
        createCard={createCard}
        loadingCreateCard={loadingCreateCard}
      />
      <CardsList
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
  cardsData: Card[]
  isAuthor: boolean
  pagination: EntityPagination
  searchCard: (cardName: string) => void
  changeCurrentPage: (page: number) => void
  loadingCreateCard: boolean
  createCard: (args: CreateCardDto) => Promise<any>
  updateCard: (args: UpdateCardArgs) => Promise<any>
  deleteCard: (args: DeleteCardArgs) => Promise<any>
}
