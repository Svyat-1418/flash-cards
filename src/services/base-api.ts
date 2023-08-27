import { createApi } from '@reduxjs/toolkit/query/react'

import { customFetchBaseQuery } from './base-api-with-refetch.ts'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: customFetchBaseQuery,
  tagTypes: ['Me', 'Decks', 'Cards'],
  endpoints: () => ({}),
})
