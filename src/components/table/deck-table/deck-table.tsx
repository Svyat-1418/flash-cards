import { useState } from 'react'

import { columns, content } from '../fake-data.ts'
import { Table } from '../table-bricks'
import { TableHeader } from '../table-header.tsx'

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
