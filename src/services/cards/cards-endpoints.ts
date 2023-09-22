import { isEmpty } from 'remeda'

import { baseApi } from '../base-api.ts'

import { GetCardsArgs, GetCardsResponse } from './types.ts'

const cardsEndpoints = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<GetCardsResponse, GetCardsArgs>({
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
