import { RootState } from '../../app/store.ts'

import { getSortString } from './get-sort-string.ts'

export const selectDeckQueryArgs = (state: RootState) => {
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
