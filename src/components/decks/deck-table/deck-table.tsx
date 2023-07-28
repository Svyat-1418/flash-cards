import { useState } from 'react'

import { Table, TableHeader } from '../../ui/table'
import { Column, TableContent } from '../../ui/table/fake-data.ts'

import { DeckTableBody } from './deck-table-body.tsx'

export type DeckTablePropsType = {
  columns: Column[]
  content: TableContent[]
}

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const DeckTable = ({ columns, content }: DeckTablePropsType) => {
  const [sort, setSort] = useState<Sort>(null)

  return (
    <Table.Root>
      <TableHeader columns={columns} sort={sort} onSort={setSort} />
      <DeckTableBody content={content} />
    </Table.Root>
  )
}
