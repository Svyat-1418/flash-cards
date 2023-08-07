import { Trash } from '../../assets/icons/trash'
import { SliderRange as Slider } from '../../components/ui/slider'
import { ItemsType, PaginationType } from '../../services/decks/types.ts'
import { Button } from '../ui/button'
import { ButtonGroup, ButtonSwitchType } from '../ui/button-group'
import { ContentContainer } from '../ui/content-container'
import { Pagination } from '../ui/pagination'
import { TextField } from '../ui/textfield'
import { Typography } from '../ui/typography'

import { DeckTable } from './deck-table'
import s from './decks.module.scss'

export type DecksPropsType = {
  deckContent: ItemsType[] | undefined
  pagination: PaginationType | undefined
  changeCurrentPage: (page: number) => void
  setShowMyDecks: (value: boolean) => void
  showMyDecks: boolean
  sliderValues: number[]
  sliderRangeValues: number[]
  setSliderRangeValues: (values: number[]) => void
  setSliderValues: (values: number[]) => void
}

export const Decks = ({
  deckContent = [],
  pagination,
  changeCurrentPage,
  setShowMyDecks,
  showMyDecks,
  sliderValues,
  sliderRangeValues,
  setSliderValues,
  setSliderRangeValues,
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

  return (
    <ContentContainer>
      <div className={s.titleContainer}>
        <Typography variant={'large'} as={'h1'}>
          Decks List
        </Typography>
        <Button>Add New Pack</Button>
      </div>
      <div className={s.settingContainer}>
        <TextField type={'search'} placeholder={'Input search'} />
        <ButtonGroup buttons={buttonsForFilterCards} label={'Show packs cards'} />
        <Slider
          max={sliderValues[1]}
          min={sliderValues[0]}
          rangeValue={sliderRangeValues}
          step={1}
          label={'Number of cards'}
          setSliderValues={setSliderValues}
          setSliderRangeValues={setSliderRangeValues}
          resetCurrentPage={changeCurrentPage}
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
          <DeckTable deckContent={deckContent} />
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
