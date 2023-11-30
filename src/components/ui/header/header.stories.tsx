import type { Meta, StoryObj } from '@storybook/react'

import avatar from '../../../assets/avatar-test/Avatar-test.svg'

import { Header } from './header.tsx'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Zakk Wylde',
    isLoggedIn: true,
    email: 'zanzi@zanzi.by',
    avatarSrc: avatar,
  },
}
