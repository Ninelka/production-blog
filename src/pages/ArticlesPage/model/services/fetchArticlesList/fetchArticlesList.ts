import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article, ArticleType } from 'entities/Article'
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageType
} from '../../selectors/articlesPageSelectors'
import {
  getArticlesOrder,
  getArticlesSearch,
  getArticlesSort
} from 'features/ArticlesSortSelector/model/selectors/getArticlesSortSelectors'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'

interface FetchArticlesListProps {
  replace?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (args, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi

    const limit = getArticlesPageLimit(getState())
    const page = getArticlesPageNum(getState())
    const sort = getArticlesSort(getState())
    const order = getArticlesOrder(getState())
    const search = getArticlesSearch(getState())
    const type = getArticlesPageType(getState())

    try {
      addQueryParams({
        sort, order, search, type
      })
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type_like: type === ArticleType.ALL ? undefined : type
        }
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
