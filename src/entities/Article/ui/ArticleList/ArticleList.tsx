import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './ArticleList.module.scss'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 9 : 3).fill(0).map((item, index) => (
  <ArticleListItemSkeleton key={index} view={view}/>
))

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.GRID } = props

  const renderArticle = (article: Article) => {
    return (
        <ArticleListItem key={article.id} article={article} view={view}/>
    )
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {articles.length > 0
          ? articles.map(renderArticle)
          : null
        }
      {isLoading && getSkeletons(view)}
    </div>
  )
})

ArticleList.displayName = 'ArticleList'
