import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { type FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
		<div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<Button data-testid="sidebar-toggle" onClick={onToggle} className={cls.collapseBtn} theme={ButtonVariant.BACKGROUND_INVERTED} square size={ButtonSize.L}>
              {collapsed ? '>' : '<'}
            </Button>
          <div className={cls.items}>
              <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.item}>
                <MainIcon className={cls.icon}/>
                <span className={cls.link}>{t('Главная')}</span>
              </AppLink>
              <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
                <AboutIcon className={cls.icon}/>
                <span className={cls.link}>{t('О сайте')}</span>
              </AppLink>
          </div>
			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher short={collapsed}/>
			</div>
		</div>
  )
}
