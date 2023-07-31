import { FC } from 'react'

import { Link } from 'react-router-dom'

import { ItemsType } from '../../../services/decks/types.ts'
import { ControlButtons } from '../../ui/control-buttons'
import { Table } from '../../ui/table'
import { Typography } from '../../ui/typography'

type Props = {
  deckContent: ItemsType[]
}

export const DeckTableBody: FC<Props> = ({ deckContent }: Props) => {
  return (
    <Table.Body>
      {deckContent.map(item => (
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
            <Typography variant={'body2'}>{item.updated}</Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography variant={'body2'}>{item.author.name}</Typography>
          </Table.Cell>
          <Table.Cell>
            <ControlButtons />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  )
}
