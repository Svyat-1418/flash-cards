import { FC, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { Edit } from '../../../assets/icons/edit'
import { OutlinedPlayCircle } from '../../../assets/icons/play-circle-outline'
import { Trash } from '../../../assets/icons/trash'
import { Card, CreateCardDto } from '../../../services/cards/types.ts'
import { UpdateDeckRequestType } from '../../../services/decks/types.ts'
import { appendDataToFormData } from '../../../shared/utils/append-data-to-form-data.ts'
import { DeleteDeckModal } from '../../decks-list-content/decks-list/modal/delete-deck.modal'
import { UpdateDeckModal } from '../../decks-list-content/decks-list/modal/update-deck/update-deck.tsx'
import { Button } from '../../ui/button'
import { Cover } from '../../ui/cover/cover.tsx'
import { DropdownNewItemWithIcon } from '../../ui/dropdown-new/dropdown-new-items/dropdow-new-item.tsx'
import { DropdownNew } from '../../ui/dropdown-new/dropdown-new.tsx'
import { TextField } from '../../ui/textfield'
import { Typography } from '../../ui/typography'

import s from './deck-panel.module.scss'
import { AddNewCardModal } from './modal/add-new-card.modal'

export const DeckPanel: FC<Props> = ({
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
}) => {
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
