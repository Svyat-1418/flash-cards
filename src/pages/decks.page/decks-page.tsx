import { useEffect } from 'react'

import { toast } from 'react-toastify'

import { useAppDispatch, useAppSelector } from '../../app/hooks.ts'
import { Decks } from '../../components/decks'
import { useMeQuery } from '../../services/auth/auth-endpoints.ts'
import {
  setAddPackModalIsOpen,
  setCurrentPage,
  setDecksName,
  setDeletePackModalIsOpen,
  setEditingDeck,
  setEditPackModalIsOpen,
  setShowMyDecks,
  setSliderRangeValues,
  setSliderValues,
} from '../../services/decks/deck-query-params.slice.ts'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '../../services/decks/decks-endpoints.ts'
import { AddDeckRequestType, Deck, UpdateDeckRequestType } from '../../services/decks/types.ts'

export const DecksPage = () => {
  const dispatch = useAppDispatch()
  const {
    currentPage,
    showMyDecks,
    sliderValues,
    sliderRangeValues,
    decksName,
    addPackModalIsOpen,
    editPackModalIsOpen,
    deletePackModalIsOpen,
    editingDeck,
  } = useAppSelector(state => state.decksQueryParams)

  const setCurrentPageHandle = (page: number) => {
    dispatch(setCurrentPage({ page }))
  }
  const setShowMyDecksHandle = (value: boolean) => {
    dispatch(setShowMyDecks({ value }))
  }
  const setSliderValuesHandle = (values: number[]) => {
    dispatch(setSliderValues({ values }))
  }
  const setSliderRangeValuesHandle = (values: number[]) => {
    dispatch(setSliderRangeValues({ values }))
  }
  const setDecksNameHandle = (name: string) => {
    dispatch(setDecksName({ name }))
  }
  const setAddPackModalIsOpenHandle = (isOpen: boolean) => {
    dispatch(setAddPackModalIsOpen({ isOpen }))
  }
  const setEditPackModalIsOpenHandle = (isOpen: boolean) => {
    dispatch(setEditPackModalIsOpen({ isOpen }))
  }
  const setDeletePackModalIsOpenHandle = (isOpen: boolean) => {
    dispatch(setDeletePackModalIsOpen({ isOpen }))
  }
  const setEditingDeckHandle = (deck: Deck | null) => {
    dispatch(setEditingDeck({ deck }))
  }

  const searchDeck = (name: string) => {
    setCurrentPageHandle(1)
    setDecksNameHandle(name)
  }

  const filteringByNumberOfCards = () => {
    setCurrentPageHandle(1)
    setSliderValuesHandle(sliderRangeValues)
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
      setAddPackModalIsOpenHandle(false)
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
      setDeletePackModalIsOpenHandle(false)
      setEditingDeckHandle(null)
    } catch (err) {
      const error = err as { data: { message: string } }

      toast.error(error.data.message)
    }
  }

  const updateDeckHandle = (args: UpdateDeckRequestType) => {
    updateDeck(args)
      .unwrap()
      .then(() => {
        setEditPackModalIsOpenHandle(false)
        setEditingDeckHandle(null)
      })
  }

  useEffect(() => {
    if (sliderRangeValues[1] !== decksData?.maxCardsCount) {
      setSliderRangeValuesHandle([sliderRangeValues[0], decksData?.maxCardsCount || 100])
      setSliderValuesHandle([sliderValues[0], decksData?.maxCardsCount || 10])
    }
  }, [decksData?.maxCardsCount])

  return (
    <Decks
      userId={user?.id}
      deckContent={decksData?.items}
      pagination={decksData?.pagination}
      changeCurrentPage={setCurrentPageHandle}
      showMyDecks={showMyDecks}
      setShowMyDecks={setShowMyDecksHandle}
      sliderValues={[0, decksData ? decksData.maxCardsCount : 20]}
      sliderRangeValues={sliderRangeValues}
      setSliderValues={filteringByNumberOfCards}
      setSliderRangeValues={setSliderRangeValuesHandle}
      searchDeck={searchDeck}
      addPackModalIsOpen={addPackModalIsOpen}
      setAddPackModalIsOpen={setAddPackModalIsOpenHandle}
      editPackModalIsOpen={editPackModalIsOpen}
      setEditPackModalIsOpen={setEditPackModalIsOpenHandle}
      deletePackModalIsOpen={deletePackModalIsOpen}
      setDeletePackModalIsOpen={setDeletePackModalIsOpenHandle}
      addDeck={addDeckHandle}
      deleteDeck={deleteDeckHandle}
      updateDeck={updateDeckHandle}
      editingDeck={editingDeck}
      setEditingDeck={setEditingDeckHandle}
    />
  )
}
