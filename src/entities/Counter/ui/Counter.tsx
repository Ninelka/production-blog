import { Button } from 'shared/ui/Button/Button'
import { counterActions } from '../model/slice/counterSlice'
import { useSelector } from 'react-redux'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export const Counter = () => {
  const dispatch = useAppDispatch()
  const counterValue = useSelector(getCounterValue)
  const { t } = useTranslation()
  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }
  return (
        <div>
          <h1 data-testid="value-title">{counterValue}</h1>
          <Button data-testid="increment-btn" onClick={increment}>{t('Увеличить')}</Button>
          <Button data-testid="decrement-btn" onClick={decrement}>{t('Уменьшить')}</Button>
        </div>
  )
}
