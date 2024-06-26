import { PaginatedEntity } from '@/services/common.types'
import { Nullable } from '@shared/types/nullable'

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
  question?: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: Nullable<string>
}
export type GetCardsResponse = PaginatedEntity<Card>

export type CreateCardArgs = { body: FormData } & Pick<Card, 'deckId'>

export type CreateCardResponse = Card & {
  comments: Nullable<string[]>
  type: Nullable<string>
  rating: number
  moreId: Nullable<string>
}

export type UpdateCardArgs = Pick<Card, 'deckId'> & {
  body: FormData
  cardId: Card['id']
}

export type DeleteCardArgs = { cardId: Card['id'] } & Pick<Card, 'deckId'>
