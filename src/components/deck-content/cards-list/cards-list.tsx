import { FC, useState } from 'react'

import { Card, UpdateCardArgs } from '../../../services/cards/types.ts'
import type { Pagination as EntityPagination } from '../../../services/common.types.ts'
import { Pagination } from '../../ui/pagination'
import { Empty } from '../../ui/table'

import { CardTable } from './card-table'
import { EditCardModal } from './modal/edit-card.modal'

export const CardsList: FC<Props> = ({
  cardsData,
  changeCurrentPage,
  pagination,
  isAuthor,
  updateCard,
}) => {
  const [editingCard, setEditingCard] = useState<Card | null>(null)
  const [openEditCardModal, setEditCardModal] = useState(false)
  const openEditCardModalHandle = (card: Card) => {
    setEditingCard(card)
    setEditCardModal(true)
  }

  const closeEditCardModal = () => {
    setEditingCard(null)
    setEditCardModal(false)
  }

  return (
    <>
      {cardsData.length ? (
        <>
          <EditCardModal
            editingCard={editingCard}
            modalIsOpen={openEditCardModal}
            closeModal={closeEditCardModal}
            onSubmit={updateCard}
          />
          <CardTable
            cardContent={cardsData}
            isAuthor={isAuthor}
            editCardHandle={openEditCardModalHandle}
          />
          <Pagination
            onPageChange={changeCurrentPage}
            currentPage={pagination.currentPage}
            pageCount={pagination.totalPages}
          />
        </>
      ) : (
        <Empty />
      )}
    </>
  )
}

type Props = {
  cardsData: Card[]
  isAuthor: boolean
  pagination: EntityPagination
  changeCurrentPage: (page: number) => void
  updateCard: (args: UpdateCardArgs) => Promise<any>
}
