import { Decks } from '../../components/decks'
import { deckContent } from '../../components/decks/deck-table/deck-fake-data.ts'
import { useGetDecksQuery } from '../../services/decks/decks.ts'

export const DecksPage = () => {
  const { data } = useGetDecksQuery({})

  // todo Решить вопрос с фейк данными(storybook)
  return <Decks deckContent={data ? data.items : deckContent} />
}
