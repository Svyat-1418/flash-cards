import { Meta, StoryObj } from '@storybook/react'

import { AddNewCardModal } from './add-new-card.modal'

const meta = {
  title: 'Modals/AddNewCard',
  component: AddNewCardModal,
} satisfies Meta<typeof AddNewCardModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modalIsOpen: true,
    onSubmit: _ => {
      return new Promise(() => {})
    },
  },
}
