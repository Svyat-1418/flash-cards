import { useState } from 'react'

import { Table } from '../../table/table-bricks'
import { ControlButtons } from '../../ui/table/control-buttons'

import { TableHeader } from './table-packs.header'
import { data as PacksMockData, TablePacksDataType } from './table-packs.mock-data.ts'

type TablePacksPropsType = {
  data?: TablePacksDataType
}

export type SortType = {
  key: string
  direction: 'asc' | 'desc'
} | null

export type ColumnType = {
  key: string
  title: string
}

export const TablePacks = ({ data }: TablePacksPropsType) => {
  const tableData = data ? data : PacksMockData
  const [sort, setSort] = useState<SortType>(null)

  const column: ColumnType[] = [
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'cards',
      title: 'Cards',
    },
    {
      key: 'lastUpdated',
      title: 'Last Updated',
    },
    {
      key: 'createdBy',
      title: 'Created By',
    },
  ]

  const packsFieldsRender = tableData.map(el => {
    return (
      <Table.Row key={el.title}>
        <Table.Cell>{el.title}</Table.Cell>
        <Table.Cell>{el.cardsCount}</Table.Cell>
        <Table.Cell>{el.updated}</Table.Cell>
        <Table.Cell>{el.createdBy}</Table.Cell>
        <Table.Cell>
          <ControlButtons />
        </Table.Cell>
      </Table.Row>
    )
  })

  return (
    <Table.Root>
      <TableHeader sort={sort} onSort={setSort} columns={column} />
      <Table.Body>{packsFieldsRender}</Table.Body>
    </Table.Root>
  )
}
