import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { type FC, memo, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemsList = useSelector(getSidebarItems)

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
		<aside data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<Button data-testid="sidebar-toggle" onClick={onToggle} className={cls.collapseBtn} theme={ButtonVariant.BACKGROUND_INVERTED} square size={ButtonSize.L}>
              {collapsed ? '>' : '<'}
            </Button>
          <nav className={cls.items}>
            {sidebarItemsList.map((item) => (
              <SidebarItem
                key={item.path}
                item={item}
                collapsed={collapsed}
              />
            ))}
          </nav>
			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher short={collapsed}/>
			</div>
		</aside>
  )
})

Sidebar.displayName = 'Sidebar'
