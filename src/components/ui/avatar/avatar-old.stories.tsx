import type { Meta, StoryObj } from '@storybook/react'

import AvatarPic from '../../../assets/avatar-test/Avatar-test.svg'

import { AvatarOld } from './avatar-old.tsx'

const meta = {
  title: 'Components/Avatar',
  component: AvatarOld,
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarOld>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: AvatarPic,
  },
}
