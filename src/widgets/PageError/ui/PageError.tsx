import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { Button } from '@/shared/ui/Button'
import { useTranslation } from 'react-i18next'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const reloadPage = (): void => {
    location.reload()
  }

  return (
        <div className={classNames(cls.PageError, {}, [className])}>
          {t('Произошла непредвиденная ошибка')}
          <Button onClick={reloadPage}>
            {t('Обновить страницу')}
          </Button>
        </div>
  )
}
