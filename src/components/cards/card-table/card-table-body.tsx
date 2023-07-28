import { FC } from 'react'

import { ControlButtons } from '../../ui/control-buttons'
import { Rating } from '../../ui/rating'
import { Table } from '../../ui/table'
import { Typography } from '../../ui/typography'

import { CardTableContent } from './card-fake-data.ts'

type Props = {
  content: CardTableContent[]
}

export const CardTableBody: FC<Props> = ({ content }) => {
  return (
    <Table.Body>
      {content.map(item => (
        <Table.Row key={item.question}>
          <Table.Cell>
            <Typography variant={'body2'}>{item.question}</Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography variant={'body2'}>{item.answer}</Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography variant={'body2'}>{item.updated}</Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography variant={'body2'}>
              <Rating starCount={5} grade={item.grade} />
            </Typography>
          </Table.Cell>
          <Table.Cell>
            <ControlButtons />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  )
}
