import { isEmpty } from 'remeda'

import { baseApi } from '../base-api.ts'
import { PaginatedResponse } from '../common.types.ts'

import { Card, CreateCardArgs, CreateCardResponse, GetCardsParams } from './types.ts'

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
    createCard: builder.mutation<CreateCardResponse, CreateCardArgs>({
      query: ({ deckId, ...body }) => ({
        url: `decks/${deckId}/cards`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cards'],
    }),
  }),
})

export const { useGetCardsQuery, useCreateCardMutation } = cardsEndpoints
