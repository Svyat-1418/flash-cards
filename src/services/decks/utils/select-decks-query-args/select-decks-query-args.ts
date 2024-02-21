import { RootState } from '@/app/store/types/root-state'
import { getSortString } from '@/shared/utils/get-sort-string'

export const selectDecksQueryArgs = (state: RootState) => {
  const { decksName, authorId, sliderValues, sort, currentPage } = state.decksQueryParams

  const sortedString = getSortString(sort)

  return {
    name: decksName,
    authorId,
    minCardsCount: sliderValues[0].toString(),
    maxCardsCount: sliderValues[1].toString(),
    orderBy: sortedString,
    //itemsPerPage: pageSize,
    currentPage,
  }
}
