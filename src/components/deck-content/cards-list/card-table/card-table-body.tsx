import { FC } from 'react'

import { Card } from '../../../../services/cards/types.ts'
import { toLocaleDateString } from '../../../../utils/toLocaleDateString.ts'
import { ControlButtons } from '../../../ui/control-buttons'
import { Rating } from '../../../ui/rating'
import { Table } from '../../../ui/table'
import { Typography } from '../../../ui/typography'

type Props = {
  content: Card[]
  isAuthor: boolean
}

export const CardTableBody: FC<Props> = ({ content, isAuthor }) => {
  return (
    <Table.Body>
      {content.map(item => (
        <Table.Row key={item.id}>
          <Table.Cell>
            <Typography variant={'body2'}>
              {item.question.length > 20 ? `${item.question.slice(0, 20)} ...` : item.question}
            </Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography variant={'body2'}>
              {item.answer.length > 20 ? `${item.answer.slice(0, 20)} ...` : item.answer}
            </Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography variant={'body2'}>{toLocaleDateString(item.updated)}</Typography>
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
