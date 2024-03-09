import React, { type InputHTMLAttributes, memo } from 'react'

import { classNames, type Mods } from '@/shared/lib/classNames/classNames'

import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
interface InputProps extends HTMLInputProps {
  className?: string
  label?: string
  value?: string | number
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    placeholder,
    value,
    onChange,
    type = 'text',
    readonly,
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const mods: Mods = {
    [cls.readonly]: readonly
  }

  return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
          {placeholder && (
            <div className={cls.placeholder}>
              {`${placeholder}>`}
            </div>
          )}
          <input
            className={cls.input}
            type={type}
            value={value}
            onChange={onChangeHandler}
            readOnly={readonly}
            {...otherProps} />
        </div>
  )
})

Input.displayName = 'Input'
