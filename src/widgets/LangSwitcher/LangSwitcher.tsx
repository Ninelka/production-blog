import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariant } from '@/shared/ui/Button/Button'
import { type FC, memo } from 'react'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({ className, short }) => {
  const { t, i18n } = useTranslation()

  const toggle = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
		<Button theme={ButtonVariant.CLEAR} onClick={toggle} className={classNames('', {}, [className])}>
			{short ? t('Короткий язык') : t('Язык')}
		</Button>
  )
})

LangSwitcher.displayName = 'LangSwitcher'
