import { Trash } from '../../../assets/icons/trash'
import { AddDeckRequestType } from '../../../services/decks/types.ts'
import { Button } from '../../ui/button'
import { ButtonGroup, ButtonSwitchType } from '../../ui/button-group'
import { SliderRange as Slider } from '../../ui/slider'
import { TextField } from '../../ui/textfield'
import { Typography } from '../../ui/typography'
import { AddNewPackModal } from '../add-new-pack.modal'
import s from '../decks.module.scss'

type DecksListPanelType = {
  addPackModalIsOpen: boolean
  setAddPackModalIsOpen: (value: boolean) => void
  addDeck: (args: AddDeckRequestType) => void
  searchDeck: (decksName: string) => void
  setShowMyDecks: (value: boolean) => void
  sliderValues: number[]
  sliderRangeValues: number[]
  setSliderValues: () => void
  setSliderRangeValues: (values: number[]) => void
  showMyDecks: boolean
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
}: DecksListPanelType) => {
  // todo сброс пагинации при показе моих decks
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

  return (
    <>
      <AddNewPackModal
        modalIsOpen={addPackModalIsOpen}
        setModalIsOpen={setAddPackModalIsOpen}
        onSubmit={addDeck}
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
    </>
  )
}
