import { Card } from '../cards/types'
import { Deck } from '../decks/types'

export type LearnDeckResponse = Omit<Card, 'userId'>

export type SaveGradeArds = {
  deckId: Deck['id']
  cardId: Card['id']
  grade: number
}
