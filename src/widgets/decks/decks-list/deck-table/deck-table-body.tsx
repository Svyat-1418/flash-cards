import { Link } from 'react-router-dom'

import s from './deck-table-body.module.scss'

import { Deck } from '@/services/decks/types'
import emptyCover from '@/shared/assets/jpeg/empty.jpg'
import { ControlButtons } from '@/shared/ui-kit/control-buttons'
import { Cover } from '@/shared/ui-kit/cover'
import { Table } from '@/shared/ui-kit/table'
import { Typography } from '@/shared/ui-kit/typography'
import { convertToLocaleDate } from '@/shared/utils/convert-to-locale-date'

type Props = {
  deckContent: Deck[]
  userId?: string | undefined
  editDeck: (item: Deck) => void
  deleteDeck: (item: Deck) => void
}

export const DeckTableBody = ({ deckContent, userId, editDeck, deleteDeck }: Props) => {
  return (
    <Table.Body className={s.tableBody}>
      {deckContent.map(item => {
        const isAdmin = item.userId === userId
        const editItem = () => {
          editDeck(item)
        }

        const deleteItem = () => {
          deleteDeck(item)
        }
        const deckIsEmpty = item.cardsCount === 0

        return (
          <Table.Row key={item.id}>
            <Table.Cell className={s.nameAndCover}>
              {item.cover ? <Cover as={'image'} src={item.cover} /> : <Cover src={emptyCover} />}
              <Typography variant={'body2'} as={Link} to={`cards/${item.id}`}>
                {item.name}
              </Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{item.cardsCount}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{convertToLocaleDate(item.updated)}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{item.author.name}</Typography>
            </Table.Cell>
            <Table.Cell>
              <ControlButtons
                isAdmin={isAdmin}
                toLearn={`learn/${item.id}`}
                handleDelete={deleteItem}
                handleEdit={editItem}
                deckIsEmpty={deckIsEmpty}
              />
            </Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  )
}
