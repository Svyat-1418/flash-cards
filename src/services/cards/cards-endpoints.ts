import { isEmpty } from 'remeda'

import { RootState } from '../../app/store.ts'
import { getFileFromFormData } from '../../shared/utils/get-file-from-form-data'
import { getTextFromFormData } from '../../shared/utils/get-text-from-form-data'
import { selectCardsQueryArgs } from '../../shared/utils/selectCardsQueryArgs.ts'
import { baseApi } from '../base-api.ts'

import {
  CreateCardArgs,
  CreateCardResponse,
  DeleteCardArgs,
  GetCardsArgs,
  GetCardsResponse,
  UpdateCardArgs,
} from './types.ts'

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
    createCard: builder.mutation<CreateCardResponse, CreateCardArgs>({
      query: ({ deckId, ...body }) => ({
        url: `decks/${deckId}/cards`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cards'],
      async onQueryStarted({ deckId }, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState

        const { data: createdCard } = await queryFulfilled

        const cardsQueryArgs = selectCardsQueryArgs(state)

        dispatch(
          cardsEndpoints.util.updateQueryData('getCards', { deckId, ...cardsQueryArgs }, draft => {
            draft.items.unshift(createdCard)
          })
        )
      },
    }),
    updateCard: builder.mutation<CreateCardResponse, UpdateCardArgs>({
      query: ({ cardId, ...body }) => ({
        url: `cards/${cardId}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Cards'],
      async onQueryStarted({ cardId, deckId, body }, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState

        let questionImageUrl = ''
        let answerImageUrl = ''

        const cardsQueryArgs = selectCardsQueryArgs(state)

        const patchResult = dispatch(
          cardsEndpoints.util.updateQueryData('getCards', { deckId, ...cardsQueryArgs }, draft => {
            const card = draft.items.find(card => card.id === cardId)

            if (card) {
              const question = getTextFromFormData(body, 'question')
              const answer = getTextFromFormData(body, 'answer')
              const questionImgBlob = getFileFromFormData(body, 'questionImg')
              const answerImgBlob = getFileFromFormData(body, 'answerImg')

              if (questionImgBlob instanceof Blob) {
                questionImageUrl = URL.createObjectURL(questionImgBlob)
              }
              if (answerImgBlob instanceof Blob) {
                answerImageUrl = URL.createObjectURL(answerImgBlob)
              }

              Object.assign(card, {
                question,
                answer,
                questionImageUrl,
                answerImageUrl,
              })
            }
          })
        )

        try {
          await queryFulfilled
        } catch (e) {
          patchResult.undo()
        } finally {
          URL.revokeObjectURL(questionImageUrl)
          URL.revokeObjectURL(answerImageUrl)
        }
      },
    }),
    deleteCard: builder.mutation<void, DeleteCardArgs>({
      query: ({ cardId }) => ({
        url: `cards/${cardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cards'],
      async onQueryStarted({ cardId, deckId }, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState

        const cardsQueryArgs = selectCardsQueryArgs(state)

        const patchResult = dispatch(
          cardsEndpoints.util.updateQueryData('getCards', { deckId, ...cardsQueryArgs }, draft => {
            const index = draft.items.findIndex(card => card.id === cardId)

            if (index !== -1) {
              draft.items.splice(index, 1)
            }
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo
        }
      },
    }),
  }),
})

export const {
  useGetCardsQuery,
  useCreateCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
} = cardsEndpoints
