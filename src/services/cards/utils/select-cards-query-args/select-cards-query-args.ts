import { RootState } from '@/app/store/types/root-state'
import { getSortString } from '@shared/utils/get-sort-string'

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
