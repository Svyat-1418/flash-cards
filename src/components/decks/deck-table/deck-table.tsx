import { useState } from 'react'

import { ItemType } from '../../../services/decks/types.ts'
import { Table, TableHeader } from '../../ui/table'

import { deckColumns } from './deck-fake-data.ts'
import { DeckTableBody } from './deck-table-body.tsx'

export type DeckTablePropsType = {
  deckContent: ItemType[]
}

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const DeckTable = ({ deckContent }: DeckTablePropsType) => {
  const [sort, setSort] = useState<Sort>(null)

  return (
    <Table.Root>
      <TableHeader columns={deckColumns} sort={sort} onSort={setSort} />
      <DeckTableBody deckContent={deckContent} />
    </Table.Root>
  )
}
