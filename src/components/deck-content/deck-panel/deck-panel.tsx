import { FC, useState } from 'react'

import { CreateCardDto } from '../../../services/cards/types.ts'
import { Button } from '../../ui/button'
import { Cover } from '../../ui/cover/cover.tsx'
import { TextField } from '../../ui/textfield'
import { Typography } from '../../ui/typography'

import { AddNewCardModal } from './modal/add-new-card.modal'

export const DeckPanel: FC<Props> = ({
  isAuthor,
  name,
  cover,
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
        <Typography variant={'large'} as={'h1'}>
          {name}
        </Typography>
        <Cover src={cover} />
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
  cover: string
  isAuthor: boolean
  searchCard: (cardName: string) => void
  createCard: (args: CreateCardDto) => Promise<any>
  loadingCreateCard: boolean
}
