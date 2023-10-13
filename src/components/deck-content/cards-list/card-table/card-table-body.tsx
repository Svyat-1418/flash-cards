import { FC } from 'react'

import { CardTableContent } from '../../../cards/card-table/card-fake-data'
import { ControlButtons } from '../../../ui/control-buttons'
import { Rating } from '../../../ui/rating'
import { Table } from '../../../ui/table'
import { Typography } from '../../../ui/typography'

type Props = {
  content: CardTableContent[]
  isAuthor: boolean
}

export const CardTableBody: FC<Props> = ({ content, isAuthor }) => {
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
            <ControlButtons isAdmin={isAuthor} />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  )
}
