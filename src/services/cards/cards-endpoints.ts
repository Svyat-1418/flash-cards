import { isEmpty } from 'remeda'

import { baseApi } from '../base-api.ts'
import { PaginatedResponse } from '../common.types.ts'

import { Card, GetCardsParams } from './types.ts'

const cardsEndpoints = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<PaginatedResponse<Card>, GetCardsParams>({
      query: ({ deckId, ...params }) => {
        return {
          url: `decks/${deckId}/cards`,
          params: isEmpty(params) ? undefined : params,
        }
      },
      providesTags: ['Cards'],
    }),
  }),
})

export const { useGetCardsQuery } = cardsEndpoints
