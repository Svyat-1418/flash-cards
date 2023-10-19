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
}

export const CardTable = ({ cardContent, isAuthor }: CardTablePropsType) => {
  const [sort, setSort] = useState<Sort>(null)

  return (
    <Table.Root>
      <TableHeader columns={cardColumns} sort={sort} onSort={setSort} />
      <CardTableBody content={cardContent} isAuthor={isAuthor} />
    </Table.Root>
  )
}
