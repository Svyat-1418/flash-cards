import { Deck } from '../../../../services/decks/types.ts'
import { Table, TableHeader } from '../../../ui/table'

import { deckColumns } from './deck-fake-data.ts'
import { DeckTableBody } from './deck-table-body.tsx'
import s from './deck-table.module.scss'

export type DeckTablePropsType = {
  userId?: string | undefined
  deckContent: Deck[]
  editDeck: (item: Deck) => void
  deleteDeck: (item: Deck) => void
  sort: Sort
  handleSort: (sort: Sort) => void
}

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const DeckTable = ({
  deckContent,
  userId,
  editDeck,
  deleteDeck,
  sort,
  handleSort,
}: DeckTablePropsType) => {
  return (
    <div className={s.scrollBar}>
      <Table.Root>
        <TableHeader columns={deckColumns} sort={sort} onSort={handleSort} />
        <DeckTableBody
          deckContent={deckContent}
          userId={userId}
          editDeck={editDeck}
          deleteDeck={deleteDeck}
        />
      </Table.Root>
    </div>
  )
}
