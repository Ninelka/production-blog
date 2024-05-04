import { memo, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { ArticleSortField } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type SortOrder } from '@/shared/types/sort'
import { Select, type SelectOption } from '@/shared/ui/Select'

import cls from './ArticlesSortSelector.module.scss'

interface ArticlesSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
    const { className, sort, order, onChangeSort, onChangeOrder } = props
    const { t } = useTranslation()

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    )

    const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам'),
            },
        ],
        [t],
    )

    return (
        <div className={classNames(cls.ArticlesSortSelector, {}, [className])}>
            <Select
                label={t('Сортировать ПО')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                label={t('по')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    )
})

ArticlesSortSelector.displayName = 'ArticlesSortSelector'
