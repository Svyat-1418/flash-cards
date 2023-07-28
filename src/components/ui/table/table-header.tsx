import { FC, MouseEventHandler } from 'react'

import { clsx } from 'clsx'

import { ArrowDown } from '../../../assets/icons/arraw-down'
import { ArrowUp } from '../../../assets/icons/arraw-up'
import { Sort } from '../../decks/deck-table'
import { Typography } from '../typography'

import { Column, columns as fakeColumns } from './fake-data.ts'
import { Table } from './table'
import s from './table.module.scss'

type Props = {
  columns: Column[]
  sort: Sort
  onSort: (sort: Sort) => void
}

const dataAttributes = {
  sortable: 'data-sortable',
  name: 'data-name',
} as const

export const TableHeader: FC<Props> = ({ columns = fakeColumns, sort, onSort, ...restProps }) => {
  const handleSorting: MouseEventHandler<HTMLTableRowElement> = e => {
    if (!(e.target instanceof HTMLTableCellElement)) return

    const isSortable = e.target.getAttribute(dataAttributes.sortable)
    const key = e.target.getAttribute(dataAttributes.name)

    if (!isSortable || isSortable !== 'true') return

    if (key === null) throw new Error('No data-name found!')

    if (key !== sort?.key) {
      return onSort({ key, direction: 'asc' })
    }

    if (sort.direction === 'asc') {
      return onSort({ key, direction: 'desc' })
    }

    onSort(null)
  }

  return (
    <Table.Head {...restProps}>
      <Table.Row onClick={handleSorting}>
        {columns.map(column => {
          const showSort = column.isSortable && sort && sort.key === column.key

          return (
            <Table.HeadCell
              className={clsx(column.isSortable, s.sortable)}
              {...{
                [dataAttributes.sortable]: column.isSortable,
                [dataAttributes.name]: column.key,
              }}
              key={column.title}
            >
              <span>
                <Typography variant={'subtitle2'}>{column.title}</Typography>
                {showSort && <span>{sort.direction === 'asc' ? <ArrowUp /> : <ArrowDown />}</span>}
              </span>
            </Table.HeadCell>
          )
        })}
      </Table.Row>
    </Table.Head>
  )
}
