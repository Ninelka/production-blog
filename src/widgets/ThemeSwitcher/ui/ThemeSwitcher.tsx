import { classNames } from 'shared/lib/classNames/classNames'
import React, { type FC } from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button theme={ButtonVariant.CLEAR} onClick={toggleTheme} className={classNames('', {}, [className])}>
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>
  )
}
