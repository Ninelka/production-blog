import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import cls from './ArticlesPageFilters.module.scss'
import { type ArticleSortField, type ArticleView, type ArticleType, ArticleViewSelector } from '@/entities/Article'
import { acticlesPageActions } from '../../model/slices/articlesPageSlice'
import { useSelector } from 'react-redux'
import { getArticlesPageType, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { type SortOrder } from '@/shared/types'
import {
  ArticlesSortSelector,
  getArticlesOrder,
  getArticlesSearch,
  getArticlesSort
} from '@/features/ArticlesSortSelector'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
  const { t } = useTranslation()
  const view = useSelector(getArticlesPageView)
  const dispatch = useAppDispatch()
  const sort = useSelector(getArticlesSort)
  const order = useSelector(getArticlesOrder)
  const search = useSelector(getArticlesSearch)
  const type = useSelector(getArticlesPageType)

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(acticlesPageActions.setView(view))
    dispatch(acticlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(acticlesPageActions.setOrder(newOrder))
    dispatch(acticlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(acticlesPageActions.setSort(newSort))
    dispatch(acticlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(acticlesPageActions.setSearch(search))
    dispatch(acticlesPageActions.setPage(1))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(acticlesPageActions.setType(value))
    dispatch(acticlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
            <ArticlesSortSelector
              order={order}
              sort={sort}
              onChangeOrder={onChangeOrder}
              onChangeSort={onChangeSort}
            />
            <ArticleViewSelector view={view} onViewClick={onChangeView}/>
        </div>
        <Card className={cls.search}>
            <Input placeholder={t('Поиск')} onChange={onChangeSearch} value={search}/>
        </Card>
        <ArticleTypeTabs value={type} onChangeType={onChangeType}/>
    </div>
  )
})

ArticlesPageFilters.displayName = 'ArticlesPageFilters'
