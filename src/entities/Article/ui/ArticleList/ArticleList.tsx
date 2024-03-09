import { type HTMLAttributeAnchorTarget, memo } from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextSize } from '@/shared/ui/Text'

import cls from './ArticleList.module.scss'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 9 : 3).fill(0).map((item, index) => (
  <ArticleListItemSkeleton key={index} view={view}/>
))

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.GRID, target = ArticleView.GRID } = props
  const { t } = useTranslation()
  const renderArticle = (article: Article) => {
    return (
        <ArticleListItem key={article.id} article={article} view={view} target={target}/>
    )
  }

  if (!isLoading && !articles?.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} text={t('Статьи не найдены')}/>
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {articles?.length > 0
          ? articles.map(renderArticle)
          : null
        }
      {isLoading && getSkeletons(view)}
    </div>
  )
})

ArticleList.displayName = 'ArticleList'
