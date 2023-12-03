import type { Meta, StoryObj } from '@storybook/react'

import AddPicture from '../../../assets/icons/add-picture/add-picture.tsx'
import { Button } from '../button'

import { FileInput } from './file-input.tsx'

const meta = {
  title: 'Components/FileInput',
  component: FileInput,
  tags: ['autodocs'],
} satisfies Meta<typeof FileInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <Button variant={'secondary'}>
        <AddPicture />
        <span>Pick File</span>
      </Button>
    ),
  },
}
