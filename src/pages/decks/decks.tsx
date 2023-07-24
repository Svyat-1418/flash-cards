import { useState } from 'react'

import { Trash } from '../../assets/icons/trash'
import { Button } from '../../components/ui/button'
import { ButtonGroup, ButtonSwitchType } from '../../components/ui/button-group'
import { ContentContainer } from '../../components/ui/content-container'
import { SliderRange as Slider } from '../../components/ui/slider'
import { TextField } from '../../components/ui/textfield'
import { Typography } from '../../components/ui/typography'

import s from './decks.module.scss'

export const Decks = () => {
  const [activeButton, setActiveButton] = useState<'all' | 'my'>('all')
  const showMyCards = () => {
    setActiveButton('my')
  }
  const showAllCards = () => {
    setActiveButton('all')
  }
  const buttonsForFilterCards: ButtonSwitchType[] = [
    {
      title: 'My Cards',
      active: activeButton === 'my',
      callback: showMyCards,
    },
    {
      title: 'All Cards',
      active: activeButton === 'all',
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
        <Slider max={100} min={0} rangeValue={[0, 100]} step={1} label={'Number of cards'} />
        <Button variant={'secondary'}>
          <>
            <Trash />
            Clear Filter
          </>
        </Button>
      </div>
    </ContentContainer>
  )
}
