import { Sort } from '../../components/deck-content/cards-list/card-table'

export const getSortString = (sort: Sort) => {
  if (sort !== null) {
    return `${sort.key}-${sort.direction}`
  }
}
