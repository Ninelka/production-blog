import { classNames } from '@/shared/lib/classNames/classNames'
import React, { type FC, memo } from 'react'
import { Theme } from '@/shared/const/theme'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { Button, ButtonVariant } from '@/shared/ui/Button/Button'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button theme={ButtonVariant.CLEAR} onClick={toggleTheme} className={classNames('', {}, [className])}>
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>
  )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'
