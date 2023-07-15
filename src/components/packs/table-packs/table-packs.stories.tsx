import { Meta, StoryObj } from '@storybook/react'

import { TablePacks } from './table-packs.tsx'

const meta = {
  title: 'Packs/TablePacks',
  component: TablePacks,
  tags: ['autodocs'],
} satisfies Meta<typeof TablePacks>

export default meta
type Story = StoryObj<typeof meta>

export const TablePacksDefault: Story = {}
