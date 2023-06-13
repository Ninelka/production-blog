import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetailsPage.module.scss'
import { memo } from 'react'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      {t('Статьи')}
    </div>
  )
}

export default memo(ArticleDetailsPage)
