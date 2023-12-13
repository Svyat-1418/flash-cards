import { FC } from 'react'

import { Card } from '../../../../services/cards/types.ts'
import { toLocaleDateString } from '../../../../utils/toLocaleDateString.ts'
import { ControlButtons } from '../../../ui/control-buttons'
import { Cover } from '../../../ui/cover/cover.tsx'
import { Rating } from '../../../ui/rating'
import { Table } from '../../../ui/table'
import { Typography } from '../../../ui/typography'

type Props = {
  content: Card[]
  isAuthor: boolean
  editCard: (card: Card) => void
  deleteCard: (card: Card) => void
}

export const CardTableBody: FC<Props> = ({ content, isAuthor, editCard, deleteCard }) => {
  return (
    <Table.Body>
      {content.map(item => (
        <Table.Row key={item.id}>
          <Table.Cell>
            {item.questionImg && <Cover src={item.questionImg} />}
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
          {isAuthor && (
            <Table.Cell>
              <ControlButtons
                isAdmin={isAuthor}
                forCards
                handleEdit={() => editCard(item)}
                handleDelete={() => deleteCard(item)}
              />
            </Table.Cell>
          )}
        </Table.Row>
      ))}
    </Table.Body>
  )
}
