import { Meta, StoryObj } from '@storybook/react'

import { Cover } from './cover'

const meta = {
  title: 'Components/Cover',
  component: Cover,
  tags: ['autodocs'],
} satisfies Meta<typeof Cover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://deveducation.com/wp-content/uploads/2022/06/4ff620e1-6e56-4399-9ed4-4540e44181c4.webp',
  },
}
