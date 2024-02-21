import { Sort } from '@/shared/types/sort'

export const getSortString = (sort: Sort) => {
  if (sort !== null) {
    return `${sort.key}-${sort.direction}`
  }
}
