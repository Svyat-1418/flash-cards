import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Nullable } from '@/shared/types/nullable'
import { Sort } from '@shared/types/sort'

const initialState = {
  itemsPerPage: 10,
  currentPage: 1,
  searchByAnswer: '',
  searchByQuestion: '',
  orderBy: 'created-desc',
  sort: null as Nullable<Sort>,
}

export const cardsSlice = createSlice({
  name: 'cardsQueryParams',
  initialState: initialState,
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

export const { setCurrentPage, setSearchByQuestion, setItemsPerPage } = cardsSlice.actions
export const { actions: cardsActions } = cardsSlice
