import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ListBox } from '@/shared/ui/Popups'

import { Currency } from '../../model/types/currency'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation()

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency)
            },
            [onChange],
        )

        return (
            <ListBox
                className={classNames('', {}, [className])}
                label={t('Укажите валюту')}
                items={options}
                value={value}
                onChange={onChangeHandler}
                readonly={readonly}
                defaultValue={t('Укажите валюту')}
                direction={'top right'}
            />
        )
    },
)

CurrencySelect.displayName = 'CurrencySelect'
