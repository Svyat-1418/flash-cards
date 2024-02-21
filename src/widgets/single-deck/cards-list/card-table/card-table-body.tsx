import s from './card-table-body.module.scss'

import { ControlButtons } from '@/shared/ui-kit/control-buttons'
import { Cover } from '@/shared/ui-kit/cover'
import { Rating } from '@/shared/ui-kit/rating'
import { Table } from '@/shared/ui-kit/table'
import { Typography } from '@/shared/ui-kit/typography'
import { convertToLocaleDate } from '@/shared/utils/convert-to-locale-date'
import { Card } from '@services/cards/types'

type Props = {
  content: Card[]
  isAuthor: boolean
  editCard: (card: Card) => void
  deleteCard: (card: Card) => void
}

export const CardTableBody = ({ content, isAuthor, editCard, deleteCard }: Props) => {
  return (
    <Table.Body>
      {content.map(item => (
        <Table.Row key={item.id}>
          <Table.Cell className={s.nameAndCover}>
            {item.questionImg && <Cover as={'image'} src={item.questionImg} />}
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
            <Typography variant={'body2'}>{convertToLocaleDate(item.updated)}</Typography>
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
