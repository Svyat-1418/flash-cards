import { useState } from 'react'

import { Table, TableHeader } from '../../../components/ui/table'
import { columns, content } from '../../../components/ui/table/fake-data.ts'

import { DeckTableBody } from './deck-table-body.tsx'

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const DeckTable = () => {
  const [sort, setSort] = useState<Sort>(null)

  return (
    <Table.Root>
      <TableHeader columns={columns} sort={sort} onSort={setSort} />
      <DeckTableBody content={content} />
    </Table.Root>
  )
}
