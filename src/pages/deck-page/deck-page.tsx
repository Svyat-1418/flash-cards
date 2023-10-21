import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useAppDispatch, useAppSelector } from '../../app/hooks.ts'
import { DeckContent } from '../../components/deck-content/deck-content.tsx'
import { useMeQuery } from '../../services/auth/auth-endpoints.ts'
import {
  useCreateCardMutation,
  useGetCardsQuery,
  useUpdateCardMutation,
} from '../../services/cards/cards-endpoints.ts'
import { setCurrentPage, setSearchByQuestion } from '../../services/cards/cards.slice.ts'
import { CreateCardDto, UpdateCardArgs } from '../../services/cards/types.ts'
import { useGetDeckByIdQuery } from '../../services/decks/decks-endpoints.ts'

export const DeckPage = () => {
  const { deckId } = useParams<{ deckId: string }>()
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(state => state.cardsQueryParams.currentPage)
  const searchByQuestion = useAppSelector(state => state.cardsQueryParams.searchByQuestion)

  const changeCurrentPage = (page: number) => {
    dispatch(setCurrentPage({ currentPage: page }))
  }
  const searchCardByQuestion = (title: string) => {
    dispatch(setSearchByQuestion({ searchByQuestion: title }))
  }

  const { data: cardsData } = useGetCardsQuery({
    deckId: deckId || '',
    currentPage: currentPage,
    question: searchByQuestion,
  })
  const { data: deckData } = useGetDeckByIdQuery({
    id: deckId || '',
  })
  const [createCard, { isLoading: loadingCreateCard }] = useCreateCardMutation({})
  const [updateCard] = useUpdateCardMutation()
  //const [deleteCard] = useDeleteCardMutation()
  const { data: meData } = useMeQuery()

  const createCardHandle = async (args: CreateCardDto) => {
    if (deckId) {
      return createCard({ deckId, ...args })
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

  if (!deckId) return <div>Deck not found</div>

  return (
    <section>
      {deckData && cardsData && (
        <DeckContent
          isAuthor={deckData.userId === meData?.id}
          searchCard={searchCardByQuestion}
          name={deckData.name}
          cardsData={cardsData.items}
          pagination={cardsData.pagination}
          changeCurrentPage={changeCurrentPage}
          createCard={createCardHandle}
          loadingCreateCard={loadingCreateCard}
          updateCard={updateCardHandle}
        />
      )}
    </section>
  )
}
