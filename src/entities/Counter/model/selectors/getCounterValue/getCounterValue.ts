import { createSelector } from 'reselect'
import { getCounter } from '../getCounter/getCounter'
import { type CounterSchema } from '../../types/counterSchema'

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value
)
