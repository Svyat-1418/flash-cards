import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Sort } from '../../components/deck-content/cards-list/card-table'
import { Nullable } from '../../types/common.types.ts'

import { Deck } from './types.ts'

type initialStateType = {
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
}

const initialState: initialStateType = {
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
}

export const decksSlice = createSlice({
  name: 'decksQueryParams',
  initialState: initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ page: number }>) => {
      state.currentPage = action.payload.page
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
} = decksSlice.actions
export const { actions: decksActions } = decksSlice
