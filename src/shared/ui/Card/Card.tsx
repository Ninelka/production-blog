import { classNames } from 'shared/lib/classNames/classNames'
import { type HTMLAttributes, memo, type ReactNode } from 'react'
import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export const Card = memo(({ className, children, ...otherProps }: CardProps) => {
  return (
    <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
        {children}
    </div>
  )
})

Card.displayName = 'Card'
