import { FC } from 'react'

import { Link } from 'react-router-dom'

import { Deck } from '../../../../services/decks/types.ts'
import { toLocaleDateString } from '../../../../utils/toLocaleDateString.ts'
import { ControlButtons } from '../../../ui/control-buttons'
import { Table } from '../../../ui/table'
import { Typography } from '../../../ui/typography'

import s from './deck-table-body.module.scss'

type Props = {
  deckContent: Deck[]
  userId?: string | undefined
  editDeck: (item: Deck) => void
  deleteDeck: (item: Deck) => void
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
            <Table.Cell className={s.nameAndCover}>
              {/*{item.cover && <Cover src={item.cover} />}*/}
              {item.cover && (
                <img src={item.cover} alt={item.name} style={{ width: '80px', height: '49px' }} />
              )}
              <Typography variant={'body2'} as={Link} to={`cards/${item.id}`}>
                {item.name}
              </Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{item.cardsCount}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{toLocaleDateString(item.updated)}</Typography>
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
              />
            </Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  )
}
