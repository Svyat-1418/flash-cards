import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Sort } from '../../components/deck-content/cards-list/card-table'
import { Nullable } from '../../types/common.types.ts'

import { Deck } from './types.ts'

type initialStateType = {
  authorId: string | undefined
  currentPage: number
  showMyDecks: boolean
  sliderValues: number[]
  sliderRangeValues: number[]
  decksName: string
  addPackModalIsOpen: boolean
  editPackModalIsOpen: boolean
  deletePackModalIsOpen: boolean
  editingDeck: null | Deck
  sort: Nullable<Sort>
  itemsPerPage: string
}

const initialState: initialStateType = {
  authorId: undefined as string | undefined,
  currentPage: 1,
  showMyDecks: false,
  sliderValues: [0, 100],
  sliderRangeValues: [0, 100],
  decksName: '',
  addPackModalIsOpen: false,
  editPackModalIsOpen: false,
  deletePackModalIsOpen: false,
  editingDeck: null,
  sort: null as Nullable<Sort>,
  itemsPerPage: '10',
}

export const decksSlice = createSlice({
  name: 'decksQueryParams',
  initialState: initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ page: number }>) => {
      state.currentPage = action.payload.page
    },
    setAuthorId: (state, action: PayloadAction<{ authorId: string | undefined }>) => {
      state.authorId = action.payload.authorId
    },
    setShowMyDecks: (state, action: PayloadAction<{ value: boolean }>) => {
      state.showMyDecks = action.payload.value
    },
    setSliderValues: (state, action: PayloadAction<{ values: number[] }>) => {
      state.sliderValues = action.payload.values
    },
    setSliderRangeValues: (state, action: PayloadAction<{ values: number[] }>) => {
      state.sliderRangeValues = action.payload.values
    },
    setDecksName: (state, action: PayloadAction<{ name: string }>) => {
      state.decksName = action.payload.name
    },
    setAddPackModalIsOpen: (state, action: PayloadAction<{ isOpen: boolean }>) => {
      state.addPackModalIsOpen = action.payload.isOpen
    },
    setEditPackModalIsOpen: (state, action: PayloadAction<{ isOpen: boolean }>) => {
      state.editPackModalIsOpen = action.payload.isOpen
    },
    setDeletePackModalIsOpen: (state, action: PayloadAction<{ isOpen: boolean }>) => {
      state.deletePackModalIsOpen = action.payload.isOpen
    },
    setEditingDeck: (state, action: PayloadAction<{ deck: null | Deck }>) => {
      state.editingDeck = action.payload.deck
    },
    setClearFilter: () => {
      return initialState
    },
    setSort: (state, action: PayloadAction<{ sort: Sort }>) => {
      state.sort = action.payload.sort
    },
    setItemsPerPage: (state, action: PayloadAction<{ value: string }>) => {
      state.itemsPerPage = action.payload.value
    },
  },
})

export const {
  setCurrentPage,
  setShowMyDecks,
  setSliderValues,
  setSliderRangeValues,
  setDecksName,
  setAddPackModalIsOpen,
  setEditPackModalIsOpen,
  setDeletePackModalIsOpen,
  setEditingDeck,
  setClearFilter,
  setItemsPerPage,
} = decksSlice.actions
export const { actions: decksActions } = decksSlice
