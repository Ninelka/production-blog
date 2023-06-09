import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import React, { type InputHTMLAttributes, memo } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
        <div className={classNames('', {}, [className])}>
          <input
            className={cls.input}
            type={type}
            value={value}
            onChange={onChangeHandler}
            {...otherProps} />
        </div>
  )
})

Input.displayName = 'Input'
