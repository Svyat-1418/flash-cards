import { FC } from 'react'

import { ControlButtons } from '../../../components/ui/control-buttons'
import { Table } from '../../../components/ui/table'
import { TableContent } from '../../../components/ui/table/fake-data.ts'
import { Typography } from '../../../components/ui/typography'

type Props = {
  content: TableContent[]
}

export const DeckTableBody: FC<Props> = ({ content }) => {
  return (
    <Table.Body>
      {content.map(item => (
        <Table.Row key={item.title}>
          <Table.Cell>
            <Typography variant={'body2'}>{item.title}</Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography variant={'body2'}>{item.cardsCount}</Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography variant={'body2'}>{item.updated}</Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography variant={'body2'}>{item.createdBy}</Typography>
          </Table.Cell>
          <Table.Cell>
            <ControlButtons />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  )
}
