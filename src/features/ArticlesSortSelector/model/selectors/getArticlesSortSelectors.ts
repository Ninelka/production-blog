import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleSortField } from 'entities/Article'

export const getArticlesSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortField.CREATED
export const getArticlesOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc'
export const getArticlesSearch = (state: StateSchema) => state.articlesPage?.search ?? ''
