import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { NotificationList } from './NotificationList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
  StoreDecorator({})
]
