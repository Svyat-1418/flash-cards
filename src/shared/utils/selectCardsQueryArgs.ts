import { RootState } from '../../app/store.ts'

import { getSortString } from './get-sort-string.ts'

export const selectCardsQueryArgs = (state: RootState) => {
  const { sort, currentPage, searchByQuestion } = state.cardsQueryParams

  const sortedString = getSortString(sort)

  return {
    question: searchByQuestion,
    orderBy: sortedString,
    //itemsPerPage: pageSize,
    currentPage,
  }
}
