import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/hooks.ts'
import { DeckContent } from '../../components/deck-content/deck-content.tsx'
import { useMeQuery } from '../../services/auth/auth-endpoints.ts'
import {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardsQuery,
  useUpdateCardMutation,
} from '../../services/cards/cards-endpoints.ts'
import { setCurrentPage } from '../../services/cards/cards.slice.ts'
import { useGetDeckByIdQuery } from '../../services/decks/decks-endpoints.ts'

export const DeckPage = () => {
  const { deckId } = useParams<{ deckId: string }>()
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(state => state.cardsQueryParams.currentPage)

  const changeCurrentPage = (page: number) => {
    dispatch(setCurrentPage({ currentPage: page }))
  }

  const { data: cardsData } = useGetCardsQuery({
    deckId: deckId || '',
    currentPage: currentPage,
  })
  const { data: deckData } = useGetDeckByIdQuery({
    id: deckId || '',
  })
  const [createCard] = useCreateCardMutation({})
  const [updateCard] = useUpdateCardMutation()
  const [deleteCard] = useDeleteCardMutation()
  const { data: meData } = useMeQuery()

  if (!deckId) return <div>Deck not found</div>

  return (
    <section>
      {deckData && cardsData && (
        <DeckContent
          isAuthor={deckData.userId === meData?.id}
          searchCard={() => {}}
          name={deckData.name}
          cardsData={cardsData.items}
          pagination={cardsData.pagination}
          changeCurrentPage={changeCurrentPage}
        />
      )}
    </section>
  )
}
