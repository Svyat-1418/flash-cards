import { FC, useState } from 'react'

import { Card, DeleteCardArgs, UpdateCardArgs } from '../../../services/cards/types.ts'
import type { Pagination as EntityPagination } from '../../../services/common.types.ts'
import { Pagination } from '../../ui/pagination'
import { Empty } from '../../ui/table'

import { CardTable, Sort } from './card-table'
import s from './cards-list.module.scss'
import { DeleteCardModal } from './modal/delete-card.modal'
import { UpdateCardModal } from './modal/update-card'

export const CardsList: FC<Props> = ({
  cardsData,
  sort,
  handleSort,
  changeCurrentPage,
  pagination,
  changeItemsPerPage,
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
