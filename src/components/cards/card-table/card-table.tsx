import { useState } from 'react'

import { Table, TableHeader } from '../../ui/table'

import { cardColumns, cardContent } from './card-fake-data.ts'
import { CardTableBody } from './card-table-body.tsx'

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const CardTable = () => {
  const [sort, setSort] = useState<Sort>(null)

  return (
    <Table.Root>
      <TableHeader columns={cardColumns} sort={sort} onSort={setSort} />
      <CardTableBody content={cardContent} />
    </Table.Root>
  )
}
