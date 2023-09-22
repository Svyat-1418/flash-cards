import { Nullable } from '../../types/common.types.ts'
import { PaginatedEntity } from '../common.types.ts'

export type GetCardsArgs = {
  deckId: string
  answer: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: Nullable<string>
}
export type GetCardsResponse = PaginatedEntity<Card>

export type CreateCardBody = {
  question: string
  answer: string
  questionImg?: string
  answerImg?: string
  questionVideo?: string
  answerVideo?: string
}
export type CreateCardArgs = CreateCardBody & { deckId: string }
export type UpdateCardArgs = CreateCardBody & { cardId: string }
export type CreateCardResponse = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  questionImg?: Nullable<string>
  answerImg: Nullable<string>
  answerVideo: Nullable<string>
  questionVideo: Nullable<string>
  comments: Nullable<string>
  type: Nullable<string>
  rating: number
  moreId: Nullable<string>
  created: string
  updated: string
}

export type DeleteCardParams = { id: string }

export type UpdateCardResponse = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
  rating: number
  created: string
  updated: string
}

export type Card = {
  id: string
  deckId: string
  userId: string
  answer: string
  question: string
  answerImg?: Nullable<string>
  questionImg?: Nullable<string>
  answerVideo?: Nullable<string>
  questionVideo?: Nullable<string>
  created: string
  updated: string
  shots: number
  grade: number
}
