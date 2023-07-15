import { Meta, StoryObj } from '@storybook/react'

import { ColumnType } from '../table-packs.tsx'

import { TableHeader } from './table.header.tsx'

const meta = {
  title: 'Components/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof TableHeader>

export default meta
type Story = StoryObj<typeof meta>

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

export const TablePacksHeaderDefault: Story = {
  args: {
    columns: column,
  },
}
