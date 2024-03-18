import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/Button'

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useCounterActions } from '../model/slice/counterSlice'

export const Counter = () => {
  const counterValue = useCounterValue()
  const { t } = useTranslation()
  const { decrement, increment, add } = useCounterActions()
  const handleIncrement = () => {
    increment()
  }

  const handleDecrement = () => {
    decrement()
  }

  const handleAddFive = () => {
    add(5)
  }

  return (
        <div>
          <h1 data-testid="value-title">{counterValue}</h1>
          <Button data-testid="increment-btn" onClick={handleIncrement}>{t('Увеличить')}</Button>
          <Button data-testid="add-five-btn" onClick={handleAddFive}>{t('Добавить 5')}</Button>
          <Button data-testid="decrement-btn" onClick={handleDecrement}>{t('Уменьшить')}</Button>
        </div>
  )
}
