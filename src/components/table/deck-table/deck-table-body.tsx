import { FC } from 'react'

import { TableContent } from '../fake-data.ts'
import { Table } from '../table-bricks'

type Props = {
  content: TableContent[]
}

export const DeckTableBody: FC<Props> = ({ content }) => {
  return (
    <Table.Body>
      {content.map(item => (
        <Table.Row key={item.title}>
          <Table.Cell>{item.title}</Table.Cell>
          <Table.Cell>{item.cardsCount}</Table.Cell>
          <Table.Cell>{item.updated}</Table.Cell>
          <Table.Cell>{item.createdBy}</Table.Cell>
          <Table.Cell>icons...</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  )
}
