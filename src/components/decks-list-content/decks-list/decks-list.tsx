import { Deck, PaginationType, UpdateDeckRequestType } from '../../../services/decks/types.ts'
import { Pagination } from '../../ui/pagination'
import { Typography } from '../../ui/typography'

import { DeckTable } from './deck-table'
import s from './decks-list.module.scss'
import { DeleteDeckModal } from './modal/delete-deck.modal'
import { EditPackModal } from './modal/edit-deck.modal'

type DecksListPropsType = {
  deckContent: Deck[]
  userId: string | undefined
  pagination: PaginationType | undefined
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
