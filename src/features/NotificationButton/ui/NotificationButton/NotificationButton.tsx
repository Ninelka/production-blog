import React, { memo, useCallback, useState } from 'react'

import { NotificationList } from '@/entities/Notification'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Button, ButtonVariant } from '@/shared/ui/Button'
import { Drawer } from '@/shared/ui/Drawer'
import { Icon } from '@/shared/ui/Icon'
import { Popover } from '@/shared/ui/Popups'

import cls from './NotificationButton.module.scss'

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
            <Icon inverted Svg={NotificationIcon} />
        </Button>
    )

    if (isMobile) {
        return (
            <>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </>
        )
    }

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction={'bottom left'}
            trigger={trigger}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    )
})

NotificationButton.displayName = 'NotificationButton'
