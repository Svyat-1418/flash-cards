import { CardTableBody } from './card-table-body'

import { Card } from '@/services/cards/types'
import { Table, TableHeader } from '@/shared/ui-kit/table'
import { Sort } from '@shared/types/sort'
import { cardColumns } from '@widgets/single-deck/cards-list/card-table/card-fake-data'

type CardTablePropsType = {
  cardContent: Card[]
  isAuthor: boolean
  editCard: (card: Card) => void
  deleteCard: (card: Card) => void
  sort: Sort
  handleSort: (sort: Sort) => void
}

export const CardTable = ({
  cardContent,
  isAuthor,
  editCard,
  deleteCard,
  sort,
  handleSort,
}: CardTablePropsType) => {
  const columns = isAuthor ? cardColumns : cardColumns.filter(el => el.key !== 'actions')

  return (
    <Table.Root>
      <TableHeader columns={columns} sort={sort} onSort={handleSort} />
      <CardTableBody
        content={cardContent}
        isAuthor={isAuthor}
        editCard={editCard}
        deleteCard={deleteCard}
      />
    </Table.Root>
  )
}
