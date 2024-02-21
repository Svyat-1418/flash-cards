import { deckColumns } from './deck-fake-data'
import { DeckTableBody } from './deck-table-body'
import s from './deck-table.module.scss'

import type { Deck } from '@/services/decks/types'
import { Table, TableHeader } from '@/shared/ui-kit/table'
import { Sort } from '@shared/types/sort'

export type DeckTablePropsType = {
  userId?: string | undefined
  deckContent: Deck[]
  editDeck: (item: Deck) => void
  deleteDeck: (item: Deck) => void
  sort: Sort
  handleSort: (sort: Sort) => void
}

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
