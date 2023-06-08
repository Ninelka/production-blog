import { type FC, useEffect } from 'react'
import { useStore } from 'react-redux'
import { type ReduxStoreWithManager, type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { type Reducer } from '@reduxjs/toolkit'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
          store.reducerManager.remove(name)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }

    // eslint-disable-next-line
  }, [])

  return (
        <>
          {children}
        </>
  )
}