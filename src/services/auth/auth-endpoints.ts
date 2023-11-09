import { getFileFromFormData } from '../../shared/utils/get-file-from-form-data'
import { getTextFromFormData } from '../../shared/utils/get-text-from-form-data'
import { Nullable } from '../../types/common.types.ts'
import { baseApi } from '../base-api.ts'

import {
  ForgotPasswordArgs,
  LoginArgs,
  LoginResponse,
  MeResponse,
  NewPasswordArgs,
  SignUpArgs,
  SignUpResponse,
} from './types.ts'

export const authEndpoints = baseApi.injectEndpoints({
  endpoints: builder => ({
    me: builder.query<Nullable<MeResponse>, void>({
      query: () => ({
        url: 'auth/me',
        method: 'GET',
        extraOptions: { maxRetries: false },
      }),
      providesTags: ['Me'],
    }),
     : builder.mutation<MeResponse, FormData>({
      query: body => ({
        url: `auth/me`,
        method: 'PATCH',
        body,
      }),
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        let avatar = ''

        const patchResult = dispatch(
          authEndpoints.util.updateQueryData('me', undefined, draft => {
            const name = getTextFromFormData(body, 'name')
            const avatarBlob = getFileFromFormData(body, 'avatar')

            if (avatarBlob instanceof Blob) {
              avatar = URL.createObjectURL(avatarBlob)
            }

            if (draft && avatar) {
              draft.avatar = avatar
            }

            if (draft && name) {
              draft.name = name
            }
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        } finally {
          URL.revokeObjectURL(avatar)
        }
      },
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
    forgotPassword: builder.mutation<any, ForgotPasswordArgs>({
      query: args => {
        return {
          url: `auth/recover-password`,
          method: 'POST',
          body: args,
        }
      },
    }),
    newPassword: builder.mutation<any, NewPasswordArgs>({
      query: args => ({
        url: `auth/reset-password/${args.token}`,
        method: 'POST',
        body: { password: args.password },
      }),
    }),
  }),
})

export const {
  useMeQuery,
  useUpdateMeMutation,
  useLoginMutation,
  useLogoutMutation,
  useSignUpMutation,
  useForgotPasswordMutation,
  useNewPasswordMutation,
} = authEndpoints
