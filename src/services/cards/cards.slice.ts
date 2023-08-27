import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const cardsSlice = createSlice({
  name: 'cardsQueryParams',
  initialState: {
    itemsPerPage: 10,
    currentPage: 1,
    searchByAnswer: '',
    orderBy: 'created-desc',
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
    setOrderBy: (state, action: PayloadAction<{ orderBy: string }>) => {
      state.orderBy = action.payload.orderBy
    },
  },
})
