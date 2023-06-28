import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum
} from '../../selectors/articlesPageSelectors'
import { acticlesPageActions } from '../../slices/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const hasMore = getArticlesPageHasMore(getState())
    const page = getArticlesPageNum(getState())
    const isLoading = getArticlesPageIsLoading(getState())

    if (hasMore && !isLoading) {
      dispatch(acticlesPageActions.setPage(page + 1))
      dispatch(fetchArticlesList({
        page: page + 1
      }))
    }
  }
)
