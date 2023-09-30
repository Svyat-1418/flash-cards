import type { Meta, StoryObj } from '@storybook/react'

import { cardContent } from './card-fake-data.ts'
import { CardTable } from './card-table.tsx'

const meta = {
  title: 'Table/Card Table',
  component: CardTable,
  tags: ['autodocs'],
} satisfies Meta<typeof CardTable>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {
    cardContent: cardContent,
  },
}
