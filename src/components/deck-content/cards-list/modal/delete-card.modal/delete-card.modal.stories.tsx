import { Meta, StoryObj } from '@storybook/react'

import { DeleteCardModal } from './delete-card.modal.tsx'

const meta = {
  title: 'Modals/Delete Card',
  component: DeleteCardModal,
} satisfies Meta<typeof DeleteCardModal>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {
    cardName: 'My Card',
    modalIsOpen: true,
  },
}
