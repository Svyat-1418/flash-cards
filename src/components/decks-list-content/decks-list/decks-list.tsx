import { Deck, PaginationType, UpdateDeckRequestType } from '../../../services/decks/types.ts'
import { Sort } from '../../deck-content/cards-list/card-table'
import { Pagination } from '../../ui/pagination'
import { Typography } from '../../ui/typography'

import { DeckTable } from './deck-table'
import s from './decks-list.module.scss'
import { DeleteDeckModal } from './modal/delete-deck.modal'
import { EditPackModal } from './modal/edit-deck.modal'

type DecksListPropsType = {
  sort: Sort
  handleSort: (sort: Sort) => void
  deckContent: Deck[]
  userId: string | undefined
  pagination: PaginationType | undefined
  setItemsPerPage: (value: string) => void
  changeCurrentPage: (page: number) => void
  editingDeck: Deck | null
  editPackModalIsOpen: boolean
  setEditPackModalIsOpen: (value: boolean) => void
  updateDeck: (args: UpdateDeckRequestType) => void
  deletePackModalIsOpen: boolean
  setDeletePackModalIsOpen: (value: boolean) => void
  deleteDeck: (id: string) => void
  setEditingDeck: (item: Deck | null) => void
}
export const DecksList = ({
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
    updateDeck({ id: editingDeck?.id, name: args.name, isPrivate: args.isPrivate })
  }

  const deleteDeckHandle = () => {
    if (editingDeck?.id) {
      deleteDeck(editingDeck?.id)
    }
  }

  return (
    <>
      {deckContent.length ? (
        <>
          <EditPackModal
            name={editingDeck?.name}
            isPrivate={editingDeck?.isPrivate}
            modalIsOpen={editPackModalIsOpen}
            setModalIsOpen={setEditPackModalIsOpen}
            onSubmit={updateDeckHandle}
          />
          <DeleteDeckModal
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
