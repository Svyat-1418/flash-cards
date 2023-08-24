import { useState } from 'react'

import { ItemType } from '../../../services/decks/types.ts'
import { Table, TableHeader } from '../../ui/table'

import { deckColumns } from './deck-fake-data.ts'
import { DeckTableBody } from './deck-table-body.tsx'

export type DeckTablePropsType = {
  userId?: string | undefined
  deckContent: ItemType[]
  deleteDeck: (id: string) => void
}

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const DeckTable = ({ deckContent, userId, deleteDeck }: DeckTablePropsType) => {
  const [sort, setSort] = useState<Sort>(null)

  return (
    <Table.Root>
      <TableHeader columns={deckColumns} sort={sort} onSort={setSort} />
      <DeckTableBody deckContent={deckContent} userId={userId} deleteDeck={deleteDeck} />
    </Table.Root>
  )
}
