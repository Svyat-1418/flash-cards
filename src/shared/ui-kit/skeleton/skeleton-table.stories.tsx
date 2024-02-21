import type { Meta, StoryObj } from '@storybook/react'

import { SkeletonTable } from './skeleton-table'

const meta = {
  title: 'Components/Skeleton',
  component: SkeletonTable,
  tags: ['autodocs'],
} satisfies Meta<typeof SkeletonTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
