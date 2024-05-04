import {
    type CombinedState,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type AnyAction } from 'redux'

import { type ArticleDetailsSchema } from '@/entities/Article'
import { type CounterSchema } from '@/entities/Counter'
import { type UserSchema } from '@/entities/User'
import { type AddNewCommentSchema } from '@/features/AddNewComment'
import { type LoginSchema } from '@/features/AuthByUsername'
import { type ProfileSchema } from '@/features/EditableProfileCard'
import { type ScrollSaveSchema } from '@/features/ScrollSave'
import { type ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage'
import { type ArticlesPageSchema } from '@/pages/ArticlesPage'
import { type rtkApi } from '@/shared/api/rtkApi'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    scrollSave: ScrollSaveSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
    // Асинхронные редюсеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    addNewComment?: AddNewCommentSchema
    articlesPage?: ArticlesPageSchema
    articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
