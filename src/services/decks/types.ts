export type AuthorType = {
  id: string
  name: string
}

export type ItemType = {
  author: AuthorType
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string
  rating: number
  created: string
  updated: string
  cardsCount: number
}

export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type DecksResponseType = {
  items: ItemType[]
  pagination: PaginationType
  maxCardsCount: number
}

export type OrderByProp = 'name' | 'cardsCount' | 'grade'
export type DecksRequestType = {
  minCardsCount?: string
  maxCardsCount?: string
  name?: string
  authorId?: string
  orderBy?: `${OrderByProp}-asc` | `${OrderByProp}-desc`
  currentPage?: number
  itemsPerPage?: number
}

export type AddDeckRequestType = {
  cover?: File | undefined
  name: string
  isPrivate?: boolean
}

export type DeleteDeckResponseType = Omit<ItemType, 'author'>

export type DeleteDeckRequestType = { id: string }
