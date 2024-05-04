import type {
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
    StateSchemaKey,
} from './config/StateSchema'
import { createReduxStore, type AppDispatch } from './config/store'
import { StoreProvider } from './ui/StoreProvider'

export {
    StoreProvider,
    createReduxStore,
    type StateSchema,
    type ReduxStoreWithManager,
    type AppDispatch,
    type ThunkConfig,
    type StateSchemaKey,
}
