import React, { type FC, memo } from 'react'

import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import { Theme } from '@/shared/const/theme'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Button, ButtonVariant } from '@/shared/ui/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme={ButtonVariant.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'
