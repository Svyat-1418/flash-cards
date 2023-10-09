import { FC } from 'react'

import { Card } from '../../../services/cards/types.ts'
import type { Pagination as EntityPagination } from '../../../services/common.types.ts'
import { Pagination } from '../../ui/pagination'
import { Empty } from '../../ui/table'

import { CardTable } from './card-table'

export const CardsList: FC<Props> = ({ cardsData, changeCurrentPage, pagination, isAuthor }) => {
  return (
    <>
      {cardsData.length ? (
        <>
          <CardTable cardContent={cardsData} isAuthor={isAuthor} />
          <Pagination
            onPageChange={changeCurrentPage}
            currentPage={pagination.currentPage}
            pageCount={pagination.totalPages}
          />
        </>
      ) : (
        <Empty />
      )}
    </>
  )
}

type Props = {
  cardsData: Card[]
  isAuthor: boolean
  pagination: EntityPagination
  changeCurrentPage: (page: number) => void
}
