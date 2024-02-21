import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useMeQuery } from '@/services/auth/auth-endpoints'
import {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardsQuery,
  useUpdateCardMutation,
} from '@/services/cards/cards-endpoints'
import {
  cardsActions,
  setCurrentPage,
  setItemsPerPage,
  setSearchByQuestion,
} from '@/services/cards/cards.slice'
import { CreateCardDto, DeleteCardArgs, UpdateCardArgs } from '@/services/cards/types'
import {
  setDeletePackModalIsOpen,
  setEditPackModalIsOpen,
} from '@/services/decks/deck-query-params.slice'
import {
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useUpdateDeckMutation,
} from '@/services/decks/decks-endpoints'
import { UpdateDeckRequestType } from '@/services/decks/types'
import { appendDataToFormData } from '@/shared/utils/append-data-to-form-data'
import { getSortString } from '@/shared/utils/get-sort-string'
import { useAppDispatch } from '@app/store/hooks/use-app-dispatch'
import { useAppSelector } from '@app/store/hooks/use-app-selector'
import { useDebounce } from '@shared/hooks/use-debounce'
import { Sort } from '@shared/types/sort'
import { DeckContent } from '@widgets/single-deck/deck-content'

export const DeckPage = () => {
  const { deckId } = useParams<{ deckId: string }>()
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(state => state.cardsQueryParams.currentPage)
  const searchByQuestion = useAppSelector(state => state.cardsQueryParams.searchByQuestion)
  const sort = useAppSelector(state => state.cardsQueryParams.sort)
  const itemsPerPage = useAppSelector(state => state.cardsQueryParams.itemsPerPage)
  const deleteDeckModalIsOpen = useAppSelector(
    state => state.decksQueryParams.deletePackModalIsOpen
  )
  const editPackModalIsOpen = useAppSelector(state => state.decksQueryParams.editPackModalIsOpen)

  const { data: meData } = useMeQuery()
  const { currentData: currentCardsData, data: cardsData } = useGetCardsQuery({
    deckId: deckId || '',
    currentPage: currentPage,
    question: useDebounce(searchByQuestion, 1000),
    orderBy: getSortString(sort),
    itemsPerPage: itemsPerPage,
  })
  const { data: deckData } = useGetDeckByIdQuery({
    id: deckId || '',
  })
  const [createCard, { isLoading: loadingCreateCard }] = useCreateCardMutation({})
  const [updateCard] = useUpdateCardMutation()
  const [deleteCard] = useDeleteCardMutation()
  const [deleteDeck] = useDeleteDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  const actualCardsData = currentCardsData ?? cardsData

  const handleSort = (sort: Sort) => {
    dispatch(cardsActions.setSort({ sort }))
  }
  const changeCurrentPage = (page: number) => {
    dispatch(setCurrentPage({ currentPage: page }))
  }
  const searchCardByQuestion = (title: string) => {
    dispatch(setSearchByQuestion({ searchByQuestion: title }))
  }
  const changeItemsPerPage = (value: string) => {
    dispatch(setItemsPerPage({ itemsPerPage: +value }))
  }

  const setDeletePackModalIsOpenHandle = (isOpen: boolean) => {
    dispatch(setDeletePackModalIsOpen({ isOpen }))
  }

  const setEditPackModalIsOpenHandle = (isOpen: boolean) => {
    dispatch(setEditPackModalIsOpen({ isOpen }))
  }

  const createCardHandle = async (args: CreateCardDto) => {
    if (deckId) {
      return createCard({ deckId, body: appendDataToFormData(args) })
        .unwrap()
        .then(() => toast.success('Card created'))
        .catch(error => toast.error(error))
    }
  }
  const updateCardHandle = async (args: UpdateCardArgs) => {
    try {
      const res = await updateCard(args).unwrap()

      toast.success('Card edited')

      return res
    } catch (error) {
      const e = error as Error

      toast.error(e.message)
    }
  }

  const deleteCardHandle = async (args: DeleteCardArgs) => {
    try {
      const res = await deleteCard(args)

      toast.success('Card Deleted')

      return res
    } catch (error) {
      const e = error as Error

      toast.error(e.message)
    }
  }

  const deleteDeckHandle = async (id: string) => {
    try {
      await deleteDeck({ id }).unwrap()

      toast.success('Deck deleted successfully')
      setDeletePackModalIsOpenHandle(false)
      navigate('/')

      //todo setEditingDeckHandle(null)
    } catch (err) {
      const error = err as { data: { message: string } }

      toast.error(error.data.message)
    }
  }
  const updateDeckHandle = (args: UpdateDeckRequestType) => {
    updateDeck(args)
      .unwrap()
      .then(() => {
        setEditPackModalIsOpenHandle(false)
        toast.success('Deck updated successfully')
        //todo setEditingDeckHandle(null)
      })
      .catch(e => {
        toast.error(e.data.message)
      })
  }

  if (!deckId) return <div>Deck not found</div>

  return (
    <>
      {deckData && actualCardsData && (
        <DeckContent
          deckId={deckId}
          sort={sort}
          handleSort={handleSort}
          isAuthor={deckData.userId === meData?.id}
          searchCard={searchCardByQuestion}
          name={deckData.name}
          cover={deckData.cover}
          cardsData={actualCardsData.items}
          pagination={actualCardsData.pagination}
          changeItemsPerPage={changeItemsPerPage}
          changeCurrentPage={changeCurrentPage}
          createCard={createCardHandle}
          loadingCreateCard={loadingCreateCard}
          updateCard={updateCardHandle}
          deleteCard={deleteCardHandle}
          deleteDeckModalIsOpen={deleteDeckModalIsOpen}
          setDeletePackModalIsOpen={setDeletePackModalIsOpenHandle}
          setEditPackModalIsOpen={setEditPackModalIsOpenHandle}
          editPackModalIsOpen={editPackModalIsOpen}
          updateDeck={updateDeckHandle}
          deleteDeck={deleteDeckHandle}
        />
      )}
    </>
  )
}
