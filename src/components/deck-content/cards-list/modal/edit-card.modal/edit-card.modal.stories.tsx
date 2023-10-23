import { Meta, StoryObj } from '@storybook/react'

import { EditCardModal } from './edit-card.modal.tsx'

const meta = {
  title: 'Modals/EditCardModal',
  component: EditCardModal,
} satisfies Meta<typeof EditCardModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    editingCard: {
      id: '1',
      deckId: '2',
      userId: '3',
      created: '2023',
      updated: '2023',
      shots: 1,
      grade: 5,
      question: 'Apple',
      answer: 'Яблоко',
    },
    modalIsOpen: true,
    onSubmit: _ => {
      return new Promise(() => {})
    },
  },
}
