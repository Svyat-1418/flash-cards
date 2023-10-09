import { FC } from 'react'

import { Card } from '../../services/cards/types.ts'
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
}) => {
  return (
    <div>
      <DeckPanel name={name} isAuthor={isAuthor} searchCard={searchCard} />
      <CardsList
        cardsData={cardsData}
        isAuthor={isAuthor}
        pagination={pagination}
        changeCurrentPage={changeCurrentPage}
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
}
