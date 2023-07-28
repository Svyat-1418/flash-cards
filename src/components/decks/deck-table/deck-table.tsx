import { useState } from 'react'

import { Table, TableHeader } from '../../ui/table'

import { deckColumns, deckContent } from './deck-fake-data.ts'
import { DeckTableBody } from './deck-table-body.tsx'

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const DeckTable = () => {
  const [sort, setSort] = useState<Sort>(null)

  return (
    <Table.Root>
      <TableHeader columns={deckColumns} sort={sort} onSort={setSort} />
      <DeckTableBody content={deckContent} />
    </Table.Root>
  )
}
