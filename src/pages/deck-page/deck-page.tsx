import { useParams } from 'react-router-dom'

import { DeckContent } from '../../components/deck-content/deck-content.tsx'
import { useMeQuery } from '../../services/auth/auth-endpoints.ts'
import {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardsQuery,
  useUpdateCardMutation,
} from '../../services/cards/cards-endpoints.ts'
import { useGetDeckByIdQuery } from '../../services/decks/decks-endpoints.ts'

export const DeckPage = () => {
  const { deckId } = useParams<{ deckId: string }>()
  const { data: cardsData } = useGetCardsQuery({
    deckId: deckId || '',
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
          isAuthor={deckData.userId === meData.id}
          searchCard={() => {}}
          name={deckData.name}
          cardsData={cardsData.items}
          pagination={cardsData.pagination}
          changeCurrentPage={() => {}}
        />
      )}
    </section>
  )
}
