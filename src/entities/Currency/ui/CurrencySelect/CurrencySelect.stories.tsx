import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CurrencySelect } from './CurrencySelect'
import { Currency } from '../..'

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {
  value: Currency.RUB
}
