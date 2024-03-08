import React, { type FC, memo, useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariant } from '@/shared/ui/Button/Button'
import { LoginModal } from '@/features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { HStack } from '@/shared/ui/Stack'
import { NotificationButton } from '@/features/NotificationButton'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { RoutePath } from '@/shared/const/router'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text theme={TextTheme.INVERTED} className={cls.appName} title={t('My blog')}/>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.article_create} className={cls.createBtn}>{t('Создать статью')}</AppLink>
        <HStack gap={'16'} className={cls.actions}>
          <NotificationButton/>
          <AvatarDropdown/>
        </HStack>
      </header>
    )
  }

  return (
		<header className={classNames(cls.Navbar, {}, [className])}>
          <Button theme={ButtonVariant.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>{t('Войти')}</Button>
          {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>}
		</header>
  )
})

Navbar.displayName = 'Navbar'
