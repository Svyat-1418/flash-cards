import { FC, useState } from 'react'

import { CreateCardDto } from '../../../services/cards/types.ts'
import { BackToDecksList } from '../../ui/back-to-decks-list'
import { Button } from '../../ui/button'
import { TextField } from '../../ui/textfield'
import { Typography } from '../../ui/typography'

import { AddNewCardModal } from './modal/add-new-card.modal'

export const DeckPanel: FC<Props> = ({
  isAuthor,
  name,
  searchCard,
  createCard,
  loadingCreateCard,
}) => {
  const [addNewCardModalIsOpen, setAddNewCardModalIsOpen] = useState(false)
  const closeModal = () => {
    !loadingCreateCard && setAddNewCardModalIsOpen(false)
  }

  return (
    <>
      <AddNewCardModal
        modalIsOpen={addNewCardModalIsOpen}
        closeModal={closeModal}
        onSubmit={createCard}
      />
      <div>
        <BackToDecksList />
        <Typography variant={'large'} as={'h1'}>
          {name}
        </Typography>
        {isAuthor ? (
          <Button onClick={() => setAddNewCardModalIsOpen(true)}>Add New Card</Button>
        ) : (
          <Button>Learn</Button>
        )}
        <TextField
          type={'search'}
          placeholder={'Input search'}
          onChange={e => searchCard(e.currentTarget.value)}
        />
      </div>
    </>
  )
}

type Props = {
  name: string
  isAuthor: boolean
  searchCard: (cardName: string) => void
  createCard: (args: CreateCardDto) => Promise<any>
  loadingCreateCard: boolean
}
