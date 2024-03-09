import React, { type FC, memo, useState } from 'react'

import { useSelector } from 'react-redux'

import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button'
import { HStack, VStack } from '@/shared/ui/Stack'

import cls from './Sidebar.module.scss'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemsList = useSelector(getSidebarItems)

  const switchers = (
    <>
      <ThemeSwitcher/>
      <LangSwitcher short={collapsed}/>
    </>
  )

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
		<aside data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button data-testid="sidebar-toggle" onClick={onToggle} className={cls.collapseBtn} theme={ButtonVariant.BACKGROUND_INVERTED} square size={ButtonSize.L}>
            {collapsed ? '>' : '<'}
          </Button>
          <VStack role="navigation" gap="16" className={cls.items}>
            {sidebarItemsList.map((item) => (
              <SidebarItem
                key={item.path}
                item={item}
                collapsed={collapsed}
              />
            ))}
          </VStack>
          {collapsed
            ? (
            <VStack max gap={'16'} align={'center'} className={cls.switchers}>
              {switchers}
            </VStack>
              )
            : (
            <HStack max gap={'16'} justify={'center'} className={cls.switchers}>
              {switchers}
            </HStack>
              )}
		</aside>
  )
})

Sidebar.displayName = 'Sidebar'
