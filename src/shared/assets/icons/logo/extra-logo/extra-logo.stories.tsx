import { Meta, StoryObj } from '@storybook/react'

import { ExtraLogo } from '@/shared/assets/icons/logo/extra-logo/extra-logo'

const meta = {
  title: 'Icons/New Logo',
  component: ExtraLogo,
} satisfies Meta<typeof ExtraLogo>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {},
}
