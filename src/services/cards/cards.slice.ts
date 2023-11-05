import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Sort } from '../../components/deck-content/cards-list/card-table'
import { Nullable } from '../../types/common.types.ts'

export const cardsSlice = createSlice({
  name: 'cardsQueryParams',
  initialState: {
    itemsPerPage: 10,
    currentPage: 1,
    searchByAnswer: '',
    searchByQuestion: '',
    orderBy: 'created-desc',
    sort: null as Nullable<Sort>,
  },
  reducers: {
    setItemsPerPage: (state, action: PayloadAction<{ itemsPerPage: number }>) => {
      state.itemsPerPage = action.payload.itemsPerPage
    },
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setSearchByAnswer: (state, action: PayloadAction<{ searchByAnswer: string }>) => {
      state.searchByAnswer = action.payload.searchByAnswer
    },
    setSearchByQuestion: (state, action: PayloadAction<{ searchByQuestion: string }>) => {
      state.searchByQuestion = action.payload.searchByQuestion
    },
    setOrderBy: (state, action: PayloadAction<{ orderBy: string }>) => {
      state.orderBy = action.payload.orderBy
    },
    setSort: (state, action: PayloadAction<{ sort: Sort }>) => {
      state.sort = action.payload.sort
    },
  },
})

export const { setCurrentPage, setSearchByQuestion } = cardsSlice.actions
export const { actions: cardsActions } = cardsSlice
