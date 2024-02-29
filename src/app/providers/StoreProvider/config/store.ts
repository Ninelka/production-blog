import { type CombinedState, configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema, type ThunkExtraArg } from './StateSchema'
import { counterReducer } from '@/entities/Counter'
import { userReducer } from '@/entities/User'
import { createReducerManager } from './reducerManager'
import { $api } from '@/shared/api/api'
import { scrollSaveReducer } from '@/features/ScrollSave'
import { rtkApi } from '@/shared/api/rtkApi'

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollSave: scrollSaveReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  }

  const reducerManager = createReducerManager(rootReducer)

  const extraArg: ThunkExtraArg = {
    api: $api
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    }).concat(rtkApi.middleware)
  })

  // @ts-expect-error store doesn't have reduceManager now
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
