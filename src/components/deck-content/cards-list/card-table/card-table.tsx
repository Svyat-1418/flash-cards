import { useState } from 'react'

import { Card } from '../../../../services/cards/types.ts'
import { cardColumns } from '../../../cards/card-table/card-fake-data.ts'
import { Table, TableHeader } from '../../../ui/table'

import { CardTableBody } from './card-table-body.tsx'

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

type CardTablePropsType = {
  cardContent: Card[]
  isAuthor: boolean
  editCard: (card: Card) => void
  deleteCard: (card: Card) => void
}

export const CardTable = ({ cardContent, isAuthor, editCard, deleteCard }: CardTablePropsType) => {
  const [sort, setSort] = useState<Sort>(null)

  const columns = isAuthor ? cardColumns : cardColumns.filter(el => el.key !== 'actions')

  return (
    <Table.Root>
      <TableHeader columns={columns} sort={sort} onSort={setSort} />
      <CardTableBody
        content={cardContent}
        isAuthor={isAuthor}
        editCard={editCard}
        deleteCard={deleteCard}
      />
    </Table.Root>
  )
}
