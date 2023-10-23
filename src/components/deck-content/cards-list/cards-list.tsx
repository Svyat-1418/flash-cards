import { FC, useState } from 'react'

import { Card, DeleteCardArgs, UpdateCardArgs } from '../../../services/cards/types.ts'
import type { Pagination as EntityPagination } from '../../../services/common.types.ts'
import { Pagination } from '../../ui/pagination'
import { Empty } from '../../ui/table'

import { CardTable } from './card-table'
import { DeleteCardModal } from './modal/delete-card.modal'
import { EditCardModal } from './modal/edit-card.modal'

export const CardsList: FC<Props> = ({
  cardsData,
  changeCurrentPage,
  pagination,
  isAuthor,
  updateCard,
  deleteCard,
}) => {
  const [editingCard, setEditingCard] = useState<Card | null>(null)
  const [openEditCardModal, setOpenEditCardModal] = useState(false)
  const [deletingCard, setDeletingCard] = useState<Card | null>(null)
  const [openDeleteCardModal, setOpenDeleteCardModal] = useState(false)
  const openEditCardModalHandle = (card: Card) => {
    setEditingCard(card)
    setOpenEditCardModal(true)
  }

  const closeEditCardModal = () => {
    setEditingCard(null)
    setOpenEditCardModal(false)
  }

  const openDeleteCardModalHandle = (card: Card) => {
    setDeletingCard(card)
    setOpenDeleteCardModal(true)
  }
  const closeDeleteCardModal = () => {
    setDeletingCard(null)
    setOpenDeleteCardModal(false)
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
          <DeleteCardModal
            deletingCard={deletingCard}
            modalIsOpen={openDeleteCardModal}
            closeModal={closeDeleteCardModal}
            deleteCard={deleteCard}
          />
          <CardTable
            cardContent={cardsData}
            isAuthor={isAuthor}
            editCard={openEditCardModalHandle}
            deleteCard={openDeleteCardModalHandle}
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
  deleteCard: (args: DeleteCardArgs) => Promise<any>
}
