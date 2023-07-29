import { useEffect, useState } from 'react'

import { Decks } from '../../components/decks'
import { useGetMeQuery } from '../../services/auth/auth.ts'
import { useGetDecksQuery } from '../../services/decks/decks.ts'

export const DecksPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [showMyDecks, setShowMyDecks] = useState(false)
  const [sliderValues, setSliderValues] = useState([0, 100])
  const [sliderRangeValues, setSliderRangeValues] = useState([0, 100])

  const { data: user } = useGetMeQuery()
  const { data: decksData } = useGetDecksQuery({
    currentPage: currentPage,
    authorId: showMyDecks ? user?.id : undefined,
    minCardsCount: sliderValues[0].toString(),
    maxCardsCount: sliderValues[1].toString(),
  })

  //todo Исправить Слайдер(Добавить Стейт для контроля)
  useEffect(() => {
    if (sliderRangeValues[1] !== decksData?.maxCardsCount) {
      setSliderRangeValues(values => [values[0], decksData?.maxCardsCount || 100])
      setSliderValues(values => [values[0], decksData?.maxCardsCount || 10])
    }
  }, [decksData?.maxCardsCount])

  return (
    <Decks
      deckContent={decksData?.items}
      pagination={decksData?.pagination}
      changeCurrentPage={setCurrentPage}
      setShowMyDecks={setShowMyDecks}
      sliderValues={[0, decksData ? decksData.maxCardsCount : 20]}
      sliderRangeValues={sliderRangeValues}
      setSliderValues={setSliderValues}
      setSliderRangeValues={setSliderRangeValues}
    />
  )
}
