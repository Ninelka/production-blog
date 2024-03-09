import React from 'react'

import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CurrencySelect } from './CurrencySelect'
import { Currency } from '../..'

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  decorators: [
    Story => <div style={{ padding: '150px' }}><Story/></div>
  ]
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {
  value: Currency.RUB
}
