import { FC, useState } from 'react'

import { Link } from 'react-router-dom'

import { CreateCardDto } from '../../../services/cards/types.ts'
import { Button } from '../../ui/button'
import { Cover } from '../../ui/cover/cover.tsx'
import { TextField } from '../../ui/textfield'
import { Typography } from '../../ui/typography'

import s from './deck-panel.module.scss'
import { AddNewCardModal } from './modal/add-new-card.modal'

export const DeckPanel: FC<Props> = ({
  deckId,
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
        <div className={s.titleAndButton}>
          <Typography variant={'large'} as={'h1'}>
            {name}
          </Typography>

          {isAuthor ? (
            <Button onClick={() => setAddNewCardModalIsOpen(true)}>Add New Card</Button>
          ) : (
            <Button as={Link} to={`/learn/${deckId}`}>
              Learn
            </Button>
          )}
        </div>
        {cover && <Cover src={cover} className={s.cover} />}
        <TextField
          type={'search'}
          placeholder={'Input search'}
          onChange={e => searchCard(e.currentTarget.value)}
          containerProps={{ className: s.textField }}
        />
      </div>
    </>
  )
}

type Props = {
  deckId: string
  name: string
  cover: string
  isAuthor: boolean
  searchCard: (cardName: string) => void
  createCard: (args: CreateCardDto) => Promise<any>
  loadingCreateCard: boolean
}
