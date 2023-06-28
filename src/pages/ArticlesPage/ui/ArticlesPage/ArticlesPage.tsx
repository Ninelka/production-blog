import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { memo, useCallback } from 'react'
import { ArticleList, type ArticleView, ArticleViewSelector } from 'entities/Article'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { acticlesPageActions, acticlesPageReducer } from '../../model/slices/articlesPageSlice'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useSelector } from 'react-redux'
import { getArticles } from 'pages/ArticlesPage/model/slices/articlesPageSlice'
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: acticlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  // const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(acticlesPageActions.setView(view))
  }, [dispatch])

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(acticlesPageActions.initState())
    dispatch(fetchArticlesList({
      page: 1
    }))
  })

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView}/>
        <ArticleList isLoading={isLoading} view={view} articles={articles}/>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
