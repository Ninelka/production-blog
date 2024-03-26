import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type ArticleSortField, type ArticleType } from '@/entities/Article'
import { type SortOrder } from '@/shared/types/sort'

import { getArticlesPageInited } from '../../selectors/articlesPageSelectors'
import { acticlesPageActions } from '../../slices/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const inited = getArticlesPageInited(getState())

    if (!inited) {
      searchParams.forEach((param, key) => {
        switch (key) {
          case 'order':
            dispatch(acticlesPageActions.setOrder(param as SortOrder))
            break
          case 'sort':
            dispatch(acticlesPageActions.setSort(param as ArticleSortField))
            break
          case 'search':
            dispatch(acticlesPageActions.setSearch(param))
            break
          case 'type':
            dispatch(acticlesPageActions.setType(param as ArticleType))
            break
        }
      })

      dispatch(acticlesPageActions.initState())
      dispatch(fetchArticlesList({}))
    }
  }
)
