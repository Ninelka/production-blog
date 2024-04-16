import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Avatar } from '@/shared/ui/Avatar'
import { Icon } from '@/shared/ui/Icon'
import { Skeleton } from '@/shared/ui/Skeleton'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text, TextAlign, TextSize } from '@/shared/ui/Text'

import cls from './ArticleDetails.module.scss'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { type ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleDetailsProps {
  className?: string
  id?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block}/>
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block}/>
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} className={cls.block}/>
      default:
        return null
    }
  }, [])

  useInitialEffect(() => {
    dispatch(fetchArticleById(id))
  })

  let content

  if (isLoading) {
    content = (
      <VStack max gap={'16'}>
        <HStack max justify={'center'}>
          <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        </HStack>
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </VStack>
    )
  } else if (error) {
    content = (
      <VStack max align={'center'}>
        <Text align={TextAlign.CENTER} text={t('Произошла ошибка при загрузке статьи')}/>
      </VStack>
    )
  } else {
    content = (
      <>
        <HStack max justify={'center'} className={cls.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={cls.avatar}/>
        </HStack>
        <VStack max gap={'4'} data-testid="ArticleDetails.Info">
          <Text className={cls.title} title={article?.title} text={article?.subtitle} size={TextSize.L} />
        </VStack>
        <HStack gap={'8'} className={cls.articleInfo}>
          <Icon Svg={EyeIcon} className={cls.icon} />
          <Text text={String(article?.views)}/>
        </HStack>
        <HStack gap={'8'} className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} className={cls.icon} />
          <Text text={article?.createdAt}/>
        </HStack>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack max gap={'16'} className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  )
})

ArticleDetails.displayName = 'ArticleDetails'
