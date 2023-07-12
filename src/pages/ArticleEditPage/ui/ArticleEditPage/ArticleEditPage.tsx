import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import cls from './ArticleEditPage.module.scss'
import { Page } from 'widgets/Page/Page'
import { useParams } from 'react-router-dom'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
        {/* eslint-disable-next-line @typescript-eslint/restrict-plus-operands */}
        {isEdit ? t('Редактирование статьи с ID = ') + id : t('Создание новой статьи')}
    </Page>
  )
})

export default ArticleEditPage
