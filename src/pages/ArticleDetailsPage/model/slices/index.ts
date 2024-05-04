import { combineReducers } from 'redux'

import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice'
import { type ArticleDetailsPageSchema } from '../types'

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        comments: articleDetailsCommentsReducer,
        recommendations: articleDetailsPageRecommendationsReducer,
    })
