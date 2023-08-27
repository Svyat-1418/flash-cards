import { useEffect, useState } from 'react'

import { toast } from 'react-toastify'

import { Decks } from '../../components/decks'
import { useMeQuery } from '../../services/auth/auth-endpoints.ts'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '../../services/decks/decks-endpoints.ts'
import { AddDeckRequestType, ItemType, UpdateDeckRequestType } from '../../services/decks/types.ts'

export const DecksPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [showMyDecks, setShowMyDecks] = useState(false)
  //slider
  const [sliderValues, setSliderValues] = useState([0, 100])
  const [sliderRangeValues, setSliderRangeValues] = useState([0, 100])
  //search
  const [decksName, setDecksName] = useState('')
  //modal add new pack
  const [addPackModalIsOpen, setAddPackModalIsOpen] = useState(false)
  const [editPackModalIsOpen, setEditPackModalIsOpen] = useState(false)
  const [deletePackModalIsOpen, setDeletePackModalIsOpen] = useState(false)
  const [editingDeck, setEditingDeck] = useState<ItemType | null>(null)

  const searchDeck = (name: string) => {
    setCurrentPage(1)
    setDecksName(name)
  }

  const filteringByNumberOfCards = () => {
    setCurrentPage(1)
    setSliderValues(sliderRangeValues)
  }

  const { data: user } = useMeQuery()
  const { data: decksData } = useGetDecksQuery({
    currentPage: currentPage,
    authorId: showMyDecks ? user?.id : undefined,
    minCardsCount: sliderValues[0].toString(),
    maxCardsCount: sliderValues[1].toString(),
    name: decksName,
  })
  const [addDeck] = useCreateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  const addDeckHandle = async (args: AddDeckRequestType) => {
    try {
      await addDeck(args).unwrap()
      setAddPackModalIsOpen(false)
      toast.success('Deck created successfully')
    } catch (err) {
      const error = err as { data: { message: string } }

      toast.error(error.data.message)
    }
  }

  const deleteDeckHandle = async (id: string) => {
    try {
      await deleteDeck({ id }).unwrap()
      toast.success('Deck deleted successfully')
      setDeletePackModalIsOpen(false)
      setEditingDeck(null)
    } catch (err) {
      const error = err as { data: { message: string } }

      toast.error(error.data.message)
    }
  }

  const updateDeckHandle = (args: UpdateDeckRequestType) => {
    updateDeck(args)
      .unwrap()
      .then(() => {
        setEditPackModalIsOpen(false)
        setEditingDeck(null)
      })
  }

  useEffect(() => {
    if (sliderRangeValues[1] !== decksData?.maxCardsCount) {
      setSliderRangeValues(values => [values[0], decksData?.maxCardsCount || 100])
      setSliderValues(values => [values[0], decksData?.maxCardsCount || 10])
    }
  }, [decksData?.maxCardsCount])

  return (
    <Decks
      userId={user?.id}
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
      addPackModalIsOpen={addPackModalIsOpen}
      setAddPackModalIsOpen={setAddPackModalIsOpen}
      editPackModalIsOpen={editPackModalIsOpen}
      setEditPackModalIsOpen={setEditPackModalIsOpen}
      deletePackModalIsOpen={deletePackModalIsOpen}
      setDeletePackModalIsOpen={setDeletePackModalIsOpen}
      addDeck={addDeckHandle}
      deleteDeck={deleteDeckHandle}
      updateDeck={updateDeckHandle}
      editingDeck={editingDeck}
      setEditingDeck={setEditingDeck}
    />
  )
}
