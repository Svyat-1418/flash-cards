import type { Meta, StoryObj } from '@storybook/react'

import { CardTable } from './card-table.tsx'

const meta = {
  title: 'Table/Card Table',
  component: CardTable,
  tags: ['autodocs'],
} satisfies Meta<typeof CardTable>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {}
