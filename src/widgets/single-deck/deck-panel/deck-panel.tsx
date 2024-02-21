import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import s from './deck-panel.module.scss'
import { AddNewCardModal } from './modal/add-new-card.modal'

import { DeleteDeckModal } from '@/widgets/decks/decks-list/modal/delete-deck-modal/delete-deck-modal'
import type { Card, CreateCardDto } from '@services/cards/types'
import { UpdateDeckRequestType } from '@services/decks/types'
import { Edit } from '@shared/assets/icons/edit'
import { OutlinedPlayCircle } from '@shared/assets/icons/play-circle-outline'
import { Trash } from '@shared/assets/icons/trash'
import { Button } from '@shared/ui-kit/button'
import { Cover } from '@shared/ui-kit/cover'
import { DropdownNew } from '@shared/ui-kit/dropdown-new/dropdown-new'
import { DropdownNewItemWithIcon } from '@shared/ui-kit/dropdown-new/dropdown-new-items'
import { TextField } from '@shared/ui-kit/textfield'
import { Typography } from '@shared/ui-kit/typography'
import { appendDataToFormData } from '@shared/utils/append-data-to-form-data'
import { UpdateDeckModal } from '@widgets/decks/decks-list/modal/update-deck/update-deck'

export const DeckPanel = ({
  deckId,
  cardsData,
  isAuthor,
  name,
  cover,
  searchCard,
  createCard,
  loadingCreateCard,
  deleteDeckModalIsOpen,
  setDeletePackModalIsOpen,
  deleteDeck,
  updateDeck,
  setEditPackModalIsOpen,
  editPackModalIsOpen,
}: Props) => {
  const navigate = useNavigate()

  const toLearn = () => {
    navigate(`/learn/${deckId}`)
  }

  const [addNewCardModalIsOpen, setAddNewCardModalIsOpen] = useState(false)
  const closeModal = () => {
    !loadingCreateCard && setAddNewCardModalIsOpen(false)
  }

  const updateDeckHandle = (args: { name: string; isPrivate: boolean }) => {
    updateDeck({ id: deckId, body: appendDataToFormData(args) })
  }

  const dropdown = (
    <DropdownNew>
      {cardsData.length !== 0 && (
        <DropdownNewItemWithIcon icon={<OutlinedPlayCircle />} text={'Learn'} onSelect={toLearn} />
      )}
      <DropdownNewItemWithIcon
        icon={<Edit />}
        text={'Edit'}
        onSelect={() => setEditPackModalIsOpen(true)}
      />
      <DropdownNewItemWithIcon
        icon={<Trash />}
        text={'Delete'}
        onSelect={() => setDeletePackModalIsOpen(true)}
      />
    </DropdownNew>
  )

  return (
    <>
      <AddNewCardModal
        modalIsOpen={addNewCardModalIsOpen}
        closeModal={closeModal}
        onSubmit={createCard}
      />
      <DeleteDeckModal
        modalIsOpen={deleteDeckModalIsOpen}
        setModalIsOpen={setDeletePackModalIsOpen}
        onSubmit={() => deleteDeck(deckId)}
        name={name}
      />
      <UpdateDeckModal
        name={name}
        modalIsOpen={editPackModalIsOpen}
        setModalIsOpen={setEditPackModalIsOpen}
        onSubmit={updateDeckHandle}
        cover={cover}
      />
      <div>
        <div className={s.titleAndButton}>
          <div className={s.titleContainer}>
            <Typography variant={'large'} as={'h1'}>
              {name}
            </Typography>
            {isAuthor && dropdown}
          </div>

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
  cardsData: Card[]
  isAuthor: boolean
  searchCard: (cardName: string) => void
  createCard: (args: CreateCardDto) => Promise<any>
  loadingCreateCard: boolean
  deleteDeckModalIsOpen: boolean
  setDeletePackModalIsOpen: (isOpen: boolean) => void
  deleteDeck: (id: string) => void
  updateDeck: (args: UpdateDeckRequestType) => void
  setEditPackModalIsOpen: (isOpen: boolean) => void
  editPackModalIsOpen: boolean
}
