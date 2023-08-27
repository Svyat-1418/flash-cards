import { FC } from 'react'

import { Link } from 'react-router-dom'

import { ItemType } from '../../../services/decks/types.ts'
import { ControlButtons } from '../../ui/control-buttons'
import { Table } from '../../ui/table'
import { Typography } from '../../ui/typography'

type Props = {
  deckContent: ItemType[]
  userId?: string | undefined
  editDeck: (item: ItemType) => void
  deleteDeck: (item: ItemType) => void
}

export const DeckTableBody: FC<Props> = ({ deckContent, userId, editDeck, deleteDeck }: Props) => {
  return (
    <Table.Body>
      {deckContent.map(item => {
        const isAdmin = item.userId === userId
        const editItem = () => {
          editDeck(item)
        }

        const deleteItem = () => {
          deleteDeck(item)
        }

        return (
          <Table.Row key={item.id}>
            <Table.Cell>
              <Typography variant={'body2'} as={Link} to={`cards/${item.id}`}>
                {item.name}
              </Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{item.cardsCount}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>
                {new Date(item.updated).toLocaleDateString('ru')}
              </Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{item.author.name}</Typography>
            </Table.Cell>
            <Table.Cell>
              <ControlButtons isAdmin={isAdmin} handleDelete={deleteItem} handleEdit={editItem} />
            </Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  )
}
