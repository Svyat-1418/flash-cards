import { Meta, StoryObj } from '@storybook/react'

import { Person } from './'

const meta = {
  title: 'Icons/Person',
  component: Person,
} satisfies Meta<typeof Person>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
