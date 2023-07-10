import { combineReducers } from 'redux'
import { type ArticleDetailsPageSchema } from '../types'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'
import {
  articleDetailsPageRecommendationsReducer
} from './articleDetailsPageRecommendationsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsPageRecommendationsReducer
})
