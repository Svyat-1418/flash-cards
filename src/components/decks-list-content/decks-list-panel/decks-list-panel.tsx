import { useEffect, useState } from 'react'

import { Trash } from '../../../assets/icons/trash'
import { AddDeckRequestType } from '../../../services/decks/types.ts'
import { Button } from '../../ui/button'
import { ButtonGroup, ButtonSwitchType } from '../../ui/button-group'
import { SliderRange as Slider } from '../../ui/slider'
import { TextField } from '../../ui/textfield'
import { Typography } from '../../ui/typography'

import s from './decks-list-panel.module.scss'
import { AddNewDeckModal } from './modal/add-new-deck.modal/add-new-deck.tsx'

type DecksListPanelType = {
  addPackModalIsOpen: boolean
  setAddPackModalIsOpen: (value: boolean) => void
  addDeck: (args: AddDeckRequestType) => void
  searchDeck: (decksName: string) => void
  setShowMyDecks: (value: boolean) => void
  handleSetAuthorId: (authorId: string | undefined) => void
  sliderValues: number[]
  sliderRangeValues: number[]
  setSliderValues: () => void
  setSliderRangeValues: (values: number[]) => void
  showMyDecks: boolean
  setClearFilter: () => void
  userId: string | undefined
}

export const DecksListPanel = ({
  addPackModalIsOpen,
  setAddPackModalIsOpen,
  addDeck,
  searchDeck,
  setShowMyDecks,
  sliderValues,
  sliderRangeValues,
  setSliderValues,
  setSliderRangeValues,
  showMyDecks,
  setClearFilter,
  userId,
  handleSetAuthorId,
}: DecksListPanelType) => {
  const showMyCards = () => {
    setShowMyDecks(true)
    handleSetAuthorId(userId)
  }
  const showAllCards = () => {
    setShowMyDecks(false)
    handleSetAuthorId(undefined)
  }
  const buttonsForFilterCards: ButtonSwitchType[] = [
    {
      title: 'My Decks',
      active: showMyDecks,
      callback: showMyCards,
    },
    {
      title: 'All Decks',
      active: !showMyDecks,
      callback: showAllCards,
    },
  ]

  const [search, setSearch] = useState('')
  const clearFilterHandle = () => {
    setClearFilter()
    setSearch('')
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => searchDeck(search), 2000)

    return () => clearTimeout(timeoutId)
  }, [search])

  return (
    <>
      <AddNewDeckModal
        modalIsOpen={addPackModalIsOpen}
        setModalIsOpen={setAddPackModalIsOpen}
        onSubmit={addDeck}
      />
      <div className={s.titleContainer}>
        <Typography variant={'large'} as={'h1'}>
          Decks List
        </Typography>
        <Button onClick={() => setAddPackModalIsOpen(true)}>Add New Deck</Button>
      </div>
      <div className={s.settingContainer}>
        <TextField
          type={'search'}
          placeholder={'Input search'}
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
        />
        <ButtonGroup buttons={buttonsForFilterCards} label={'Show decks'} />
        <Slider
          max={sliderValues[1]}
          min={sliderValues[0]}
          rangeValue={sliderRangeValues}
          step={1}
          label={'Number of cards'}
          setSliderValues={setSliderValues}
          setSliderRangeValues={setSliderRangeValues}
        />
        <Button variant={'secondary'} onClick={clearFilterHandle}>
          <>
            <Trash />
            Clear Filter
          </>
        </Button>
      </div>
    </>
  )
}
