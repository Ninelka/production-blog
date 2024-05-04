import { type ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema'
import { type ArticleDetailsPageRecommendationsSchema } from './ArticleDetailsPageRecommendationsSchema'

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recommendations: ArticleDetailsPageRecommendationsSchema
}
