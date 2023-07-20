import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import cls from './ArticleDetailsPageHeader.module.scss'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from 'entities/Article'
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
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button theme={ButtonVariant.OUTLINE} onClick={onBackToList}>{t('Назад к списку')}</Button>
      {canEdit && (
        <Button
          theme={ButtonVariant.OUTLINE}
          onClick={onEditArticle}
          className={cls.editBtn}
        >{t('Редактировать')}</Button>
      )}
    </div>
  )
})

export default ArticleDetailsPageHeader

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader'
