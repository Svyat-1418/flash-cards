import { FC, ReactNode, useState } from 'react'

import { Link } from 'react-router-dom'

import { Edit } from '../../../assets/icons/edit'
import { MoreIcon } from '../../../assets/icons/more/more.tsx'
import { OutlinedPlayCircle } from '../../../assets/icons/play-circle-outline'
import { Trash } from '../../../assets/icons/trash'
import { CreateCardDto } from '../../../services/cards/types.ts'
import { Button } from '../../ui/button'
import { Cover } from '../../ui/cover/cover.tsx'
import { Dropdown } from '../../ui/dropdown/dropdown.tsx'
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

  const dropdownElements: ReactNode[] = [
    <Link to={'/'} key={'learn'} className={s.dropdownElements}>
      <OutlinedPlayCircle />
      <Typography variant={'caption'}>Learn</Typography>
    </Link>,
    <Link to={'/'} key={'Edit'} className={s.dropdownElements}>
      <Edit />
      <Typography variant={'caption'}>Edit</Typography>
    </Link>,
    <Link to={'/'} key={'Delete'} className={s.dropdownElements}>
      <Trash />
      <Typography variant={'caption'}>Delete</Typography>
    </Link>,
  ]

  return (
    <>
      <AddNewCardModal
        modalIsOpen={addNewCardModalIsOpen}
        closeModal={closeModal}
        onSubmit={createCard}
      />
      <div>
        <div className={s.titleAndButton}>
          <div className={s.titleContainer}>
            <Typography variant={'large'} as={'h1'}>
              {name}
            </Typography>
            {isAuthor && <Dropdown trigger={<MoreIcon />} dropdownElements={dropdownElements} />}
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
  isAuthor: boolean
  searchCard: (cardName: string) => void
  createCard: (args: CreateCardDto) => Promise<any>
  loadingCreateCard: boolean
}
