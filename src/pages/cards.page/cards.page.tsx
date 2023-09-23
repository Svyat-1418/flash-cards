import { useParams } from 'react-router-dom'

import { Button } from '../../components/ui/button'
import { Typography } from '../../components/ui/typography'
import {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardsQuery,
  useUpdateCardMutation,
} from '../../services/cards/cards-endpoints.ts'

export const CardsPage = () => {
  const { deckId } = useParams<{ deckId: string }>()
  const { data: cardsData } = useGetCardsQuery({
    deckId: deckId || '',
  })
  const [createCard] = useCreateCardMutation({})
  const [updateCard] = useUpdateCardMutation()
  const [deleteCard] = useDeleteCardMutation()

  if (!deckId) return <div>Deck not found</div>

  return (
    <section>
      <Typography variant={'large'} as={'h1'}>
        Cards
        <p>{JSON.stringify(cardsData)}</p>
      </Typography>
      <Button
        onClick={() =>
          createCard({
            deckId,
            question: 'Why?',
            answer: 'Because',
          })
        }
      >
        Create card
      </Button>
      <Button
        onClick={() =>
          updateCard({
            cardId: 'clmwgnzz40neqvo2q43qiuncs',
            question: 'Why did you do it for??',
            answer: 'It needed to be done',
          })
        }
      >
        Update card
      </Button>
      <Button onClick={() => deleteCard({ cardId: 'clmwgnzz40neqvo2q43qiuncs' })}>
        Delete card
      </Button>
    </section>
  )
}
