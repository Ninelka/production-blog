import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Comment } from 'entities/Comment'
import { getArticleDetailsData } from 'entities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  fetchCommentsByArticleId
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi
    const dispatch = useAppDispatch()
    const userData = getUserAuthData(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !text || !article) {
      return rejectWithValue('no data')
    }

    try {
      const response = await extra.api.post<Comment>('/comment', {
        articleId: article.id,
        userId: userData.id,
        text
      })

      if (!response.data) {
        throw new Error()
      }

      dispatch(fetchCommentsByArticleId(article.id))

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
