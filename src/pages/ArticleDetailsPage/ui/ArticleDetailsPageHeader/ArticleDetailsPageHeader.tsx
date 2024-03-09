import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getArticleDetailsData } from '@/entities/Article'
import { RoutePath } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonVariant } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'

import { getCanEditArticle } from '../../model/selectors/article'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const article = useSelector(getArticleDetailsData)
  const canEdit = useSelector(getCanEditArticle)

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(`${RoutePath.article_details}${article?.id}/edit`)
    }
  }, [article, navigate])

  return (
    <HStack max justify={'between'} className={classNames('', {}, [className])}>
      <Button theme={ButtonVariant.OUTLINE} onClick={onBackToList}>{t('Назад к списку')}</Button>
      {canEdit && (
        <Button
          theme={ButtonVariant.OUTLINE}
          onClick={onEditArticle}
        >{t('Редактировать')}</Button>
      )}
    </HStack>
  )
})

export default ArticleDetailsPageHeader

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader'
