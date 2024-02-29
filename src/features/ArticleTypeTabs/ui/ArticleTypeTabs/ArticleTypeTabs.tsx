import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import { type TabItem, Tabs } from '@/shared/ui/Tabs/Tabs'
import { ArticleType } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props
  const { t } = useTranslation()

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType)
  }, [onChangeType])

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все статьи')
    },
    {
      value: ArticleType.IT,
      content: t('Айти')
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука')
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика')
    }
  ], [t])

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
    />
  )
})

ArticleTypeTabs.displayName = 'ArticleTypeTabs'
