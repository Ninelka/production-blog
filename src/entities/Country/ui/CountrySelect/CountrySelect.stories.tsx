import React from 'react'

import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CountrySelect } from './CountrySelect'
import { Country } from '../..'

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  decorators: [
    Story => <div style={{ padding: '150px' }}><Story/></div>
  ]
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {
  value: Country.Russia
}
