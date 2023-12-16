import type { Meta, StoryObj } from '@storybook/react'

import { Edit } from '../../../assets/icons/edit'
import { OutlinedPlayCircle } from '../../../assets/icons/play-circle-outline'
import { Trash } from '../../../assets/icons/trash'

import { DropdownNewItemWithIcon } from './dropdown-new-items/dropdow-new-item.tsx'
import { DropdownNew } from './dropdown-new.tsx'

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
