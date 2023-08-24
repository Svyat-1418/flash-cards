import { Nullable } from '../../types/common.types.ts'
import { baseApi } from '../base-api.ts'

import { LoginArgs, LoginResponse, MeResponse, SignUpArgs, SignUpResponse } from './types.ts'

export const authEndpoints = baseApi.injectEndpoints({
  endpoints: builder => ({
    me: builder.query<Nullable<MeResponse>, void>({
      query: () => ({
        url: 'auth/me',
        method: 'GET',
        extraOptions: { maxRetries: false },
        providesTags: ['Me'],
      }),
    }),
    login: builder.mutation<LoginResponse, LoginArgs>({
      query: args => ({
        url: `auth/login`,
        method: 'POST',
        body: args,
      }),
      invalidatesTags: ['Me'],
    }),
    logout: builder.mutation<unknown, void>({
      query: () => ({
        url: `auth/logout`,
        method: 'POST',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          authEndpoints.util.updateQueryData('me', undefined, () => {
            return null
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: ['Me'],
    }),
    signUp: builder.mutation<SignUpResponse, SignUpArgs>({
      query: args => ({
        url: `auth/sign-up`,
        method: 'POST',
        body: args,
      }),
    }),
  }),
})

export const { useMeQuery, useLoginMutation, useLogoutMutation, useSignUpMutation } = authEndpoints
