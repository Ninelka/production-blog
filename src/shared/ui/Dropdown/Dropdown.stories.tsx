import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { Button } from '../Button/Button'

export default {
  title: 'shared/Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Normal = Template.bind({})
Normal.args = {
  // eslint-disable-next-line i18next/no-literal-string
  trigger: <Button>Open</Button>,
  items: [
    { content: 'First' },
    { content: 'Second' },
    { content: 'Third' }
  ]
}
