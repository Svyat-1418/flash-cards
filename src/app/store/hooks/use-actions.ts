import { useMemo } from 'react'

import { ActionCreatorsMapObject, bindActionCreators } from 'redux'

import { useAppDispatch } from '../hooks/use-app-dispatch'

/**
 * This custom hook takes plain/async actions and returns them
 * wrapped by store's dispatch. it is always necessary to pass
 * this 1 argument, even if the action does not accept anything,
 * for example {}. The hook works well with
 * @param actions
 */
export const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
  const dispatch = useAppDispatch()

  return useMemo(
    () => bindActionCreators<T, RemapActionCreators<T>>(actions, dispatch),
    [actions, dispatch]
  )
}

// Types
type IsValidArg<T> = T extends object ? (keyof T extends never ? false : true) : true
type ActionCreatorResponse<T extends (...args: any[]) => any> = ReturnType<ReturnType<T>>
// @ts-ignore
type ReplaceReturnType<T, TNewReturn> = T extends (a: infer A) => infer R
  ? IsValidArg<A> extends true
    ? (a: A) => TNewReturn
    : () => TNewReturn
  : never
type RemapActionCreators<T extends ActionCreatorsMapObject> = {
  [K in keyof T]: ReplaceReturnType<T[K], ActionCreatorResponse<T[K]>>
}
