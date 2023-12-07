import { RootState } from '../../app/store.ts'
import { selectDeckQueryArgs } from '../../shared/utils/selectDeckQueryArgs.ts'
import { baseApi } from '../base-api.ts'

import {
  AddDeckRequestType,
  DecksRequestType,
  DecksResponseType,
  DeleteDeckRequestType,
  DeleteDeckResponseType,
  Deck,
  UpdateDeckRequestType,
} from './types.ts'

export const decksEndpoints = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<DecksResponseType, DecksRequestType>({
      query: params => ({
        url: `decks`,
        params: params && params,
      }),
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<Deck, AddDeckRequestType | DecksResponseType>({
      query: body => ({
        url: `decks`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Decks'],
      async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState

        const { data: createdDeck } = await queryFulfilled

        dispatch(
          decksEndpoints.util.updateQueryData('getDecks', selectDeckQueryArgs(state), draft => {
            draft.items.unshift(createdDeck)
          })
        )
      },
    }),
    deleteDeck: builder.mutation<DeleteDeckResponseType, DeleteDeckRequestType>({
      query: body => ({
        url: `decks/${body.id}`,
        method: `DELETE`,
      }),
      invalidatesTags: ['Decks'],
      async onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState

        const patchResult = dispatch(
          decksEndpoints.util.updateQueryData('getDecks', selectDeckQueryArgs(state), draft => {
            const index = draft?.items?.findIndex(deck => deck.id === id)

            if (index !== -1) {
              draft?.items?.splice(index, 1)
            }
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
    updateDeck: builder.mutation<Deck, UpdateDeckRequestType>({
      query: ({ id, ...body }) => ({
        url: `decks/${id}`,
        method: `PATCH`,
        body,
      }),
      invalidatesTags: ['Decks'],
    }),
    getDeckById: builder.query<DeleteDeckResponseType, DeleteDeckRequestType>({
      query: ({ id }) => ({
        url: `decks/${id}`,
        method: `GET`,
      }),
    }),
  }),
})

export const {
  useGetDecksQuery,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useUpdateDeckMutation,
  useGetDeckByIdQuery,
} = decksEndpoints
