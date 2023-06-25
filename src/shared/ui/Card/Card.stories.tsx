import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Card } from './Card'
import { Text } from 'shared/ui/Text/Text'

export default {
  title: 'shared/Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Normal = Template.bind({})
Normal.args = {
  // eslint-disable-next-line i18next/no-literal-string
  children: <Text title={'test'} text={'text text'}/>
}
