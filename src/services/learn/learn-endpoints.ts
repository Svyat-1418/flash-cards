import { baseApi } from '../base-api.ts'
import { Deck } from '../decks/types.ts'

import { LearnDeckResponse, SaveGradeArds } from './types.ts'

const learnEndpoints = baseApi.injectEndpoints({
  endpoints: builder => ({
    learnDeck: builder.query<LearnDeckResponse, Pick<Deck, 'id'>>({
      query: ({ id }) => ({
        url: `decks/${id}/learn`,
        method: 'GET',
      }),
    }),
    saveGrade: builder.mutation<LearnDeckResponse, SaveGradeArds>({
      query: ({ deckId, ...body }) => ({
        url: `decks/${deckId}/learn`,
        method: 'P[ST',
        body,
      }),
    }),
  }),
})

export const { useLearnDeckQuery, useSaveGradeMutation } = learnEndpoints
