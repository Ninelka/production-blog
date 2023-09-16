import { classNames } from 'shared/lib/classNames/classNames'
import React, { memo } from 'react'
import cls from './NotificationButton.module.scss'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { NotificationList } from 'entities/Notification'
import { Popover } from 'shared/ui/Popups'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props

  return (
      <Popover className={classNames(cls.NotificationButton, {}, [className])} direction={'bottom left'} trigger={(
        <Button theme={ButtonVariant.CLEAR}>
          <Icon inverted Svg={NotificationIcon}/>
        </Button>
      )}>
        <NotificationList className={cls.notifications}/>
      </Popover>
  )
})

NotificationButton.displayName = 'NotificationButton'
