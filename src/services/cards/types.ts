import { Nullable } from '../../types/common.types.ts'

export type GetCardsParams = {
  deckId: string
  answer: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: string | null
}
export type GetCardsResponse = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string
  rating?: number
  isDeleted: any
  isBlocked: Nullable<boolean>
  created: string
  updated: string
  cardsCount: number
}

export type CreateCardBody = {
  question: string
  answer: string
  questionImg?: string
  answerImg?: string
  questionVideo?: string
  answerVideo?: string
}
export type CreateCardArgs = CreateCardBody & { deckId: string }
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

export type Card = {
  id: string
  question: string
  answer: string
  deckId: string
  questionImg?: any
  answerImg?: any
  questionVideo?: any
  answerVideo?: any
  created: string
  updated: string
  shots: number
  grade: number
  userId: string
}

export type DeleteCardParams = { id: string }
