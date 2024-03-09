import { type ButtonHTMLAttributes, type FC, memo, type ReactNode } from 'react'

import { classNames, type Mods } from '@/shared/lib/classNames/classNames'

import cls from './Button.module.scss'

export enum ButtonVariant {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonVariant
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
  children?: ReactNode
  fullWidth?: boolean
}

export const Button: FC<ButtonProps> = memo((props) => {
  const { className, theme = ButtonVariant.OUTLINE, square, size = ButtonSize.M, children, disabled, fullWidth, ...otherProps } = props

  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth
  }

  return (
		<button className={classNames(cls.Button, mods, [className])} disabled={disabled} {...otherProps}>
			{children}
		</button>
  )
})

Button.displayName = 'Button'
