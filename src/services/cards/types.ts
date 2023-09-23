import { Nullable } from '../../types/common.types.ts'
import { PaginatedEntity } from '../common.types.ts'

export type CreateCardDto = {
  question: string
  answer: string
  questionImg?: string
  answerImg?: string
  questionVideo?: string
  answerVideo?: string
}

export type Card = CreateCardDto & {
  id: string
  deckId: string
  userId: string
  created: string
  updated: string
  shots: number
  grade: number
}

export type GetCardsArgs = {
  deckId: string
  answer?: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: Nullable<string>
}
export type GetCardsResponse = PaginatedEntity<Card>

export type CreateCardArgs = CreateCardDto & Pick<Card, 'deckId'>

export type CreateCardResponse = Omit<Card, 'grade'> & {
  comments: Nullable<string[]>
  type: Nullable<string>
  rating: number
  moreId: Nullable<string>
}

export type DeleteCardArgs = { card: Card['id'] }
