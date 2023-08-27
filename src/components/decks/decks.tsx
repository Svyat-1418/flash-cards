import { Trash } from '../../assets/icons/trash'
import { SliderRange as Slider } from '../../components/ui/slider'
import {
  AddDeckRequestType,
  ItemType,
  PaginationType,
  UpdateDeckRequestType,
} from '../../services/decks/types.ts'
import { Button } from '../ui/button'
import { ButtonGroup, ButtonSwitchType } from '../ui/button-group'
import { ContentContainer } from '../ui/content-container'
import { Pagination } from '../ui/pagination'
import { TextField } from '../ui/textfield'
import { Typography } from '../ui/typography'

import { AddNewPackModal } from './add-new-pack.modal'
import { DeckTable } from './deck-table'
import s from './decks.module.scss'
import { DeletePackModal } from './delete-pack.modal'
import { EditPackModal } from './edit-pack.modal'

export type DecksPropsType = {
  userId: string | undefined
  deckContent: ItemType[] | undefined
  pagination: PaginationType | undefined
  changeCurrentPage: (page: number) => void
  setShowMyDecks: (value: boolean) => void
  showMyDecks: boolean
  sliderValues: number[]
  sliderRangeValues: number[]
  setSliderRangeValues: (values: number[]) => void
  setSliderValues: () => void
  searchDeck: (decksName: string) => void
  addPackModalIsOpen: boolean
  setAddPackModalIsOpen: (value: boolean) => void
  editPackModalIsOpen: boolean
  setEditPackModalIsOpen: (value: boolean) => void
  deletePackModalIsOpen: boolean
  setDeletePackModalIsOpen: (value: boolean) => void
  addDeck: (args: AddDeckRequestType) => void
  deleteDeck: (id: string) => void
  updateDeck: (args: UpdateDeckRequestType) => void
  editingDeck: ItemType | null
  setEditingDeck: (item: ItemType | null) => void
}

export const Decks = ({
  userId,
  deckContent = [],
  pagination,
  changeCurrentPage,
  setShowMyDecks,
  showMyDecks,
  sliderValues,
  sliderRangeValues,
  setSliderValues,
  setSliderRangeValues,
  searchDeck,
  addPackModalIsOpen,
  setAddPackModalIsOpen,
  editPackModalIsOpen,
  setEditPackModalIsOpen,
  deletePackModalIsOpen,
  setDeletePackModalIsOpen,
  addDeck,
  deleteDeck,
  updateDeck,
  editingDeck,
  setEditingDeck,
}: DecksPropsType) => {
  const showMyCards = () => {
    setShowMyDecks(true)
  }
  const showAllCards = () => {
    setShowMyDecks(false)
  }
  const buttonsForFilterCards: ButtonSwitchType[] = [
    {
      title: 'My Cards',
      active: showMyDecks,
      callback: showMyCards,
    },
    {
      title: 'All Cards',
      active: !showMyDecks,
      callback: showAllCards,
    },
  ]
  const openEditDeckModal = (item: ItemType) => {
    setEditingDeck(item)
    setEditPackModalIsOpen(true)
  }

  const openDeleteDeckModal = (item: ItemType) => {
    setEditingDeck(item)
    setDeletePackModalIsOpen(true)
  }

  const updateDeckHandle = (args: { name: string; isPrivate: boolean }) => {
    updateDeck({ id: editingDeck?.id, name: args.name, isPrivate: args.isPrivate })
  }

  const deleteDeckHandle = () => {
    if (editingDeck?.id) {
      deleteDeck(editingDeck.id)
    }
  }

  return (
    <ContentContainer>
      <AddNewPackModal
        modalIsOpen={addPackModalIsOpen}
        setModalIsOpen={setAddPackModalIsOpen}
        onSubmit={addDeck}
      />
      <EditPackModal
        name={editingDeck?.name}
        isPrivate={editingDeck?.isPrivate}
        modalIsOpen={editPackModalIsOpen}
        setModalIsOpen={setEditPackModalIsOpen}
        onSubmit={updateDeckHandle}
      />
      <DeletePackModal
        modalIsOpen={deletePackModalIsOpen}
        setModalIsOpen={setDeletePackModalIsOpen}
        onSubmit={deleteDeckHandle}
      />
      <div className={s.titleContainer}>
        <Typography variant={'large'} as={'h1'}>
          Decks List
        </Typography>
        <Button onClick={() => setAddPackModalIsOpen(true)}>Add New Pack</Button>
      </div>
      <div className={s.settingContainer}>
        <TextField
          type={'search'}
          placeholder={'Input search'}
          onChange={e => searchDeck(e.currentTarget.value)}
        />
        <ButtonGroup buttons={buttonsForFilterCards} label={'Show packs cards'} />
        <Slider
          max={sliderValues[1]}
          min={sliderValues[0]}
          rangeValue={sliderRangeValues}
          step={1}
          label={'Number of cards'}
          setSliderValues={setSliderValues}
          setSliderRangeValues={setSliderRangeValues}
        />
        <Button variant={'secondary'}>
          <>
            <Trash />
            Clear Filter
          </>
        </Button>
      </div>
      {deckContent.length ? (
        <>
          <DeckTable
            deckContent={deckContent}
            userId={userId}
            editDeck={openEditDeckModal}
            deleteDeck={openDeleteDeckModal}
          />
          <div className={s.paginationContainer}>
            <Pagination
              currentPage={pagination?.currentPage}
              pageCount={pagination?.totalPages}
              onPageChange={changeCurrentPage}
            />
          </div>
        </>
      ) : (
        <Typography as={'h2'} variant={'large'} className={s.emptyDecksDescription}>
          {`No decks in this range`}
        </Typography>
      )}
    </ContentContainer>
  )
}
