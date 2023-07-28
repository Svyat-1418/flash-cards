import { Decks } from '../../components/decks'
import { useGetDecksQuery } from '../../services/decks/decks.ts'

export const DecksPage = () => {
  const { data } = useGetDecksQuery({})

  return <Decks />
}
