import { type Article } from '@/entities/Article'
import { rtkApi } from '@/shared/api/rtkApi'

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
    // overrideExisting: module.hot?.status() === 'apply'
    overrideExisting: __IS_DEV__,
})

export const useArticleRecommendationsList =
    recommendationsApi.useGetArticleRecommendationsListQuery
