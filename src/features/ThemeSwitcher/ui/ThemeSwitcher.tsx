import React, { type FC, memo, useCallback } from 'react'

import { saveJsonSettings } from '@/entities/User'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import { Theme } from '@/shared/const/theme'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Button, ButtonVariant } from '@/shared/ui/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme()
    const dispatch = useAppDispatch()

    const onToggleThemeHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }))
        })
    }, [dispatch, toggleTheme])

    return (
        <Button
            theme={ButtonVariant.CLEAR}
            onClick={onToggleThemeHandler}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'
