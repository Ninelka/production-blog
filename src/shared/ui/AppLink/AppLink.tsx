import { type FC, memo, type ReactNode } from 'react'

import { Link, type LinkProps } from 'react-router-dom'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children?: ReactNode
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
})

AppLink.displayName = 'AppLink'
