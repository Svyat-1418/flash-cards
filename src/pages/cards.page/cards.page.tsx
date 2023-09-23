import { useParams } from 'react-router-dom'

import { Button } from '../../components/ui/button'
import { Typography } from '../../components/ui/typography'
import { useCreateCardMutation, useGetCardsQuery } from '../../services/cards/cards-endpoints.ts'

export const CardsPage = () => {
  const { deckId } = useParams<{ deckId: string }>()
  const { data: cardsData } = useGetCardsQuery({
    deckId: deckId || '',
  })
  const [createCard] = useCreateCardMutation({})

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
    </section>
  )
}
