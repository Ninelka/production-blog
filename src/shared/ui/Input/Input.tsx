import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import React, { type InputHTMLAttributes, memo, useEffect, useRef } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    autofocus,
    ...otherProps
  } = props
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus()
    }
  }, [autofocus])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
        <div className={classNames('', {}, [className])}>
          <input
            ref={ref}
            className={cls.input}
            type={type}
            value={value}
            onChange={onChangeHandler}
            {...otherProps} />
        </div>
  )
})
