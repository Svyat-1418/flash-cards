import { useParams } from 'react-router-dom'

import { Typography } from '../../components/ui/typography'

export const Cards = () => {
  const { deckId } = useParams<{ deckId: string }>()

  if (!deckId) return <div>Deck not found</div>

  return (
    <Typography variant={'large'} as={'h1'}>
      Cards
    </Typography>
  )
}
