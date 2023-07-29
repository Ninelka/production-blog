import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getArticles } from '../../model/slices/articlesPageSlice'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { ArticleList } from 'entities/Article'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'

interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props
  const { t } = useTranslation()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)

  if (error) {
    return <Text text={t('Статьи не найдены')}/>
  }

  return (
    <ArticleList isLoading={isLoading} view={view} articles={articles} className={className}/>
  )
})

ArticleInfiniteList.displayName = 'ArticleInfiniteList'
