import { Card } from '../cards/types.ts'
import { Deck } from '../decks/types.ts'

export type LearnDeckResponse = Omit<Card, 'userId'>

export type SaveGradeArds = {
  deckId: Deck['id']
  cardId: Card['id']
  grade: number
}
