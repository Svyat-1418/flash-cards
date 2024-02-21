import { useState } from 'react'

import { CardTable } from './card-table'
import s from './cards-list.module.scss'
import { DeleteCardModal } from './modal/delete-card.modal'
import { UpdateCardModal } from './modal/update-card'

import { Card, DeleteCardArgs, UpdateCardArgs } from '@/services/cards/types'
import type { Pagination as EntityPagination } from '@/services/common.types'
import { Pagination } from '@/shared/ui-kit/pagination'
import { Empty } from '@/shared/ui-kit/table'
import { Sort } from '@shared/types/sort'

export const CardsList = ({
  cardsData,
  sort,
  handleSort,
  changeCurrentPage,
  pagination,
  changeItemsPerPage,
  isAuthor,
  updateCard,
  deleteCard,
}: Props) => {
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
        <div className={s.cardsList}>
          <UpdateCardModal
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
            sort={sort}
            handleSort={handleSort}
            cardContent={cardsData}
            isAuthor={isAuthor}
            editCard={openEditCardModalHandle}
            deleteCard={openDeleteCardModalHandle}
          />
          <Pagination
            onChangeItemsValue={changeItemsPerPage}
            currentItemsValue={pagination.itemsPerPage.toString()}
            onPageChange={changeCurrentPage}
            currentPage={pagination.currentPage}
            pageCount={pagination.totalPages}
            className={s.pagination}
          />
        </div>
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
  changeItemsPerPage: (value: string) => void
  changeCurrentPage: (page: number) => void
  updateCard: (args: UpdateCardArgs) => Promise<any>
  deleteCard: (args: DeleteCardArgs) => Promise<any>
  sort: Sort
  handleSort: (sort: Sort) => void
}
