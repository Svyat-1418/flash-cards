import { baseApi } from '../base-api'

import {
  AddDeckRequestType,
  DecksRequestType,
  DecksResponseType,
  DeleteDeckRequestType,
  DeleteDeckResponseType,
  Deck,
  UpdateDeckRequestType,
} from './types'

import { RootState } from '@app/store/types/root-state'
import { selectDecksQueryArgs } from '@services/decks/utils/select-decks-query-args'

export const decksEndpoints = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<DecksResponseType, DecksRequestType>({
      query: params => ({
        url: `decks`,
        params: params && params,
      }),
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<Deck, AddDeckRequestType>({
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
          decksEndpoints.util.updateQueryData('getDecks', selectDecksQueryArgs(state), draft => {
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
          decksEndpoints.util.updateQueryData('getDecks', selectDecksQueryArgs(state), draft => {
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
      query: ({ id, body }) => ({
        url: `decks/${id}`,
        method: `PATCH`,
        body,
      }),
      invalidatesTags: ['Decks', 'DeckById'],
      async onQueryStarted({ id, body }, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState

        let cover = ''
        const patchResult = dispatch(
          decksEndpoints.util.updateQueryData('getDecks', selectDecksQueryArgs(state), draft => {
            const deck = draft.items.find(deck => deck.id === id)

            const name = body.get('name')
            const isPrivate = body.get('isPrivate')
            const coverBlob = body.get('cover')

            if (coverBlob instanceof Blob) {
              cover = URL.createObjectURL(coverBlob)
            }

            if (deck) {
              Object.assign(deck, {
                name: typeof name === 'string' ? name : '',
                isPrivate: !!isPrivate,
                cover,
              })
            }
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        } finally {
          URL.revokeObjectURL(cover)
        }
      },
    }),
    getDeckById: builder.query<DeleteDeckResponseType, DeleteDeckRequestType>({
      query: ({ id }) => ({
        url: `decks/${id}`,
        method: `GET`,
      }),
      providesTags: ['DeckById'],
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
