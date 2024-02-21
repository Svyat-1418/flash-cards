import type { Meta, StoryObj } from '@storybook/react'

import { DropdownNew } from './dropdown-new'
import { DropdownNewItemWithIcon } from './dropdown-new-items'

import { Edit } from '@/shared/assets/icons/edit'
import { OutlinedPlayCircle } from '@/shared/assets/icons/play-circle-outline'
import { Trash } from '@/shared/assets/icons/trash'

const meta = {
  title: 'Components/DropdownNew',
  component: DropdownNew,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownNew>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownNewItemWithIcon icon={<OutlinedPlayCircle />} text="Learn" onSelect={() => {}} />
        <DropdownNewItemWithIcon icon={<Edit />} text="Edit" onSelect={() => {}} />
        <DropdownNewItemWithIcon icon={<Trash />} text="Delete" onSelect={() => {}} />
      </>
    ),
  },
}
