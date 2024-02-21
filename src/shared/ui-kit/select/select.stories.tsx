import type { Meta, StoryObj } from '@storybook/react'

import { SelectComponent } from './select'

const meta = {
  title: 'Components/SelectComponent',
  component: SelectComponent,
  tags: ['autodocs'],
  argTypes: {
    optionTextVariant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
        'error',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof SelectComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
