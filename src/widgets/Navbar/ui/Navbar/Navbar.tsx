import React, { type FC, memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/Avatar/Avatar'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useAppDispatch()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
    setIsAuthModal(false)
  }, [dispatch])

  const isAdminPanelAvailable = isAdmin || isManager

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text theme={TextTheme.INVERTED} className={cls.appName} title={t('My blog')}/>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.article_create} className={cls.createBtn}>{t('Создать статью')}</AppLink>
        <Dropdown
          direction={'bottom left'}
          className={cls.dropdown}
          items={[
            ...(isAdminPanelAvailable
              ? [{
                  content: t('Админ панель'),
                  href: RoutePath.admin_panel
                }]
              : []),
            { content: t('Профиль'), href: RoutePath.profile + authData.id },
            { content: t('Выйти'), onClick: onLogout }
          ]}
          trigger={<Avatar size={30} src={authData.avatar}/>}
        />
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
