import { type ChangeEvent, useMemo } from 'react'

import { classNames, type Mods } from '@/shared/lib/classNames/classNames'

import cls from './Select.module.scss'

export interface SelectOption<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: Array<SelectOption<T>>
    value?: T
    onChange?: (value: T) => void
    readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, onChange, readonly } = props

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option key={opt.value} value={opt.value} className={cls.option}>
                {opt.content}
            </option>
        ))
    }, [options])
    const mods: Mods = {}

    function onChangeHandler(e: ChangeEvent<HTMLSelectElement>) {
        if (onChange) {
            onChange(e.target.value as T)
        }
    }

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    )
}

Select.displayName = 'Select'
