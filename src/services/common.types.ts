export type Pagination = {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalItems: number
}

export type PaginatedResponse<T> = {
  pagination: Pagination
  items: T[]
}
