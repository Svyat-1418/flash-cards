import { useEffect } from 'react'

import { toast } from 'react-toastify'

import { useMeQuery } from '@/services/auth/auth-endpoints'
import {
  decksActions,
  setAddPackModalIsOpen,
  setClearFilter,
  setCurrentPage,
  setDecksName,
  setDeletePackModalIsOpen,
  setEditingDeck,
  setEditPackModalIsOpen,
  setIsClearedFilter,
  setItemsPerPage,
  setShowMyDecks,
  setSliderRangeValues,
  setSliderValues,
} from '@/services/decks/deck-query-params.slice'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services/decks/decks-endpoints'
import type { AddDeckRequestType, Deck, UpdateDeckRequestType } from '@/services/decks/types'
import { getSortString } from '@/shared/utils/get-sort-string'
import { useAppDispatch } from '@app/store/hooks/use-app-dispatch'
import { useAppSelector } from '@app/store/hooks/use-app-selector'
import { useDebounce } from '@shared/hooks/use-debounce'
import { Sort } from '@shared/types/sort'
import { DecksListContent } from '@widgets/decks'

export const DecksListPage = () => {
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
    sort,
    itemsPerPage,
    isClearedFilter,
  } = useAppSelector(state => state.decksQueryParams)

  const setCurrentPageHandle = (page: number) => {
    dispatch(setCurrentPage({ page }))
  }

  const setItemsPerPageHandle = (value: string) => {
    dispatch(setItemsPerPage({ value }))
  }
  const handleSetAuthorId = (authorId: string | undefined) => {
    dispatch(decksActions.setAuthorId({ authorId }))
  }
  const setShowMyDecksHandle = (value: boolean) => {
    dispatch(setCurrentPage({ page: 1 }))
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
  const setEditingDeckHandle = (deck: Deck) => {
    dispatch(setEditingDeck({ deck }))
  }
  const setClearFilterHandle = () => {
    dispatch(setClearFilter())
  }

  const searchDeck = (name: string) => {
    setCurrentPageHandle(1)
    setDecksNameHandle(name)
  }

  const filteringByNumberOfCards = () => {
    setCurrentPageHandle(1)
    setSliderValuesHandle(sliderRangeValues)
  }
  const handleSort = (sort: Sort) => {
    dispatch(decksActions.setSort({ sort }))
  }

  const { data: user } = useMeQuery()
  const {
    currentData: currentDecksData,
    data: decksData,
    isLoading: decksLoading,
  } = useGetDecksQuery({
    currentPage: currentPage,
    authorId: showMyDecks ? user?.id : undefined,
    minCardsCount: sliderValues[0].toString(),
    maxCardsCount: sliderValues[1].toString(),
    name: useDebounce(decksName, 1000),
    orderBy: getSortString(sort),
    itemsPerPage: +itemsPerPage,
  })

  const [addDeck] = useCreateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  const actualDecksData = currentDecksData ?? decksData

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
      //setEditingDeckHandle(null)
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
        //setEditingDeckHandle(null)
      })
  }

  useEffect(() => {
    if (sliderRangeValues[1] !== decksData?.maxCardsCount) {
      setSliderRangeValuesHandle([sliderRangeValues[0], decksData?.maxCardsCount || 100])
      setSliderValuesHandle([sliderValues[0], decksData?.maxCardsCount || 100])
    }
    dispatch(setIsClearedFilter({ value: false }))
  }, [decksData?.maxCardsCount, isClearedFilter])

  //todo заменить userId на флаг isAdmin
  return (
    <>
      <DecksListContent
        decksLoading={decksLoading}
        sort={sort}
        handleSort={handleSort}
        userId={user?.id}
        deckContent={actualDecksData?.items}
        pagination={decksData?.pagination}
        setItemsPerPage={setItemsPerPageHandle}
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
        setClearFilter={setClearFilterHandle}
        handleSetAuthorId={handleSetAuthorId}
      />
    </>
  )
}
