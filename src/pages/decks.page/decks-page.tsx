import { useEffect, useState } from 'react'

import { Decks } from '../../components/decks'
import { useGetMeQuery } from '../../services/auth/auth.ts'
import { useGetDecksQuery } from '../../services/decks/decks.ts'

export const DecksPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [showMyDecks, setShowMyDecks] = useState(false)
  //slider
  const [sliderValues, setSliderValues] = useState([0, 100])
  const [sliderRangeValues, setSliderRangeValues] = useState([0, 100])
  //search
  const [decksName, setDecksName] = useState('')
  //modal add new pack
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const searchDeck = (name: string) => {
    setCurrentPage(1)
    setDecksName(name)
  }

  const filteringByNumberOfCards = () => {
    setCurrentPage(1)
    setSliderValues(sliderRangeValues)
  }

  // todo при фильтре колод сетать страницу 1 в пагинации
  const { data: user } = useGetMeQuery()
  const { data: decksData } = useGetDecksQuery({
    currentPage: currentPage,
    authorId: showMyDecks ? user?.id : undefined,
    minCardsCount: sliderValues[0].toString(),
    maxCardsCount: sliderValues[1].toString(),
    name: decksName,
  })

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
      showMyDecks={showMyDecks}
      setShowMyDecks={setShowMyDecks}
      sliderValues={[0, decksData ? decksData.maxCardsCount : 20]}
      sliderRangeValues={sliderRangeValues}
      setSliderValues={filteringByNumberOfCards}
      setSliderRangeValues={setSliderRangeValues}
      searchDeck={searchDeck}
      modalIsOpen={modalIsOpen}
      setModalIsOpen={setModalIsOpen}
    />
  )
}
