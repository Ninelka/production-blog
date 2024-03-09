import { classNames } from '@/shared/lib/classNames/classNames'
import React, { memo, useCallback, useState } from 'react'
import cls from './NotificationButton.module.scss'
import { Button, ButtonVariant } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { NotificationList } from '@/entities/Notification'
import { Popover } from '@/shared/ui/Popups'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { Drawer } from '@/shared/ui/Drawer'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props
  const isMobile = useDevice()
  const [isOpen, setIsOpen] = useState(false)

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true)
  }, [])
  const onCloseDrawer = useCallback(() => {
    setIsOpen(false)
  }, [])

  const trigger = (
    <Button theme={ButtonVariant.CLEAR} onClick={onOpenDrawer}>
      <Icon inverted Svg={NotificationIcon}/>
    </Button>
  )

  if (isMobile) {
    return (
      <>
        {trigger}
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList/>
          </Drawer>
      </>
    )
  }

  return (
    <Popover className={classNames(cls.NotificationButton, {}, [className])} direction={'bottom left'} trigger={trigger}>
      <NotificationList className={cls.notifications}/>
    </Popover>
  )
})

NotificationButton.displayName = 'NotificationButton'
