import { isEmpty } from 'remeda'

import { baseApi } from '../base-api.ts'
import { PaginatedResponse } from '../common.types.ts'

import {
  Card,
  CreateCardArgs,
  CreateCardResponse,
  DeleteCardParams,
  GetCardsParams,
  UpdateCardArgs,
  UpdateCardResponse,
} from './types.ts'

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
    deleteCard: builder.mutation<void, DeleteCardParams>({
      query: ({ id }) => ({
        url: `cards/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cards'],
    }),
    updateCard: builder.mutation<UpdateCardResponse, UpdateCardArgs>({
      query: ({ cardId, ...body }) => ({
        url: `cards/${cardId}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Cards'],
    }),
  }),
})

export const {
  useGetCardsQuery,
  useCreateCardMutation,
  useDeleteCardMutation,
  useUpdateCardMutation,
} = cardsEndpoints
