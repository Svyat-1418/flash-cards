import { DeckTable } from './deck-table'
import s from './decks-list.module.scss'
import { UpdateDeckModal } from './modal/update-deck/update-deck'

import type { Deck, PaginationType, UpdateDeckRequestType } from '@/services/decks/types'
import { Sort } from '@/shared/types/sort'
import { Pagination } from '@/shared/ui-kit/pagination'
import { SkeletonTable } from '@/shared/ui-kit/skeleton/skeleton-table'
import { Typography } from '@/shared/ui-kit/typography'
import { appendDataToFormData } from '@/shared/utils/append-data-to-form-data'
import { DeleteDeckModal } from '@/widgets/decks/decks-list/modal/delete-deck-modal/delete-deck-modal'

type DecksListPropsType = {
  decksLoading: boolean
  sort: Sort
  handleSort: (sort: Sort) => void
  deckContent: Deck[]
  userId: string | undefined
  pagination: PaginationType | undefined
  setItemsPerPage: (value: string) => void
  changeCurrentPage: (page: number) => void
  editingDeck: Deck
  editPackModalIsOpen: boolean
  setEditPackModalIsOpen: (value: boolean) => void
  updateDeck: (args: UpdateDeckRequestType) => void
  deletePackModalIsOpen: boolean
  setDeletePackModalIsOpen: (value: boolean) => void
  deleteDeck: (id: string) => void
  setEditingDeck: (item: Deck) => void
}
export const DecksList = ({
  decksLoading,
  sort,
  handleSort,
  deckContent,
  userId,
  pagination,
  changeCurrentPage,
  editingDeck,
  editPackModalIsOpen,
  setEditPackModalIsOpen,
  updateDeck,
  deletePackModalIsOpen,
  setDeletePackModalIsOpen,
  deleteDeck,
  setEditingDeck,
  setItemsPerPage,
}: DecksListPropsType) => {
  const openEditDeckModal = (item: Deck) => {
    setEditingDeck(item)
    setEditPackModalIsOpen(true)
  }

  const openDeleteDeckModal = (item: Deck) => {
    setEditingDeck(item)
    setDeletePackModalIsOpen(true)
  }

  const updateDeckHandle = (args: { name: string; isPrivate: boolean }) => {
    updateDeck({ id: editingDeck?.id, body: appendDataToFormData(args) })
  }

  const deleteDeckHandle = () => {
    if (editingDeck?.id) {
      deleteDeck(editingDeck?.id)
    }
  }

  if (decksLoading) {
    return <SkeletonTable />
  }

  return (
    <>
      {deckContent.length ? (
        <>
          <UpdateDeckModal
            name={editingDeck?.name}
            isPrivate={editingDeck?.isPrivate}
            modalIsOpen={editPackModalIsOpen}
            setModalIsOpen={setEditPackModalIsOpen}
            onSubmit={updateDeckHandle}
            cover={editingDeck.cover}
          />
          <DeleteDeckModal
            name={editingDeck?.name}
            modalIsOpen={deletePackModalIsOpen}
            setModalIsOpen={setDeletePackModalIsOpen}
            onSubmit={deleteDeckHandle}
          />
          <DeckTable
            sort={sort}
            handleSort={handleSort}
            deckContent={deckContent}
            userId={userId}
            editDeck={openEditDeckModal}
            deleteDeck={openDeleteDeckModal}
          />
          <div className={s.paginationContainer}>
            <Pagination
              currentPage={pagination?.currentPage}
              pageCount={pagination?.totalPages}
              onPageChange={changeCurrentPage}
              currentItemsValue={pagination?.itemsPerPage.toString()}
              onChangeItemsValue={setItemsPerPage}
            />
          </div>
        </>
      ) : (
        <Typography as={'h2'} variant={'large'} className={s.emptyDecksDescription}>
          {`No decks in this range`}
        </Typography>
      )}
    </>
  )
}
