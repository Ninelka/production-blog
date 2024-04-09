import React from 'react'

import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { notification } from '@/shared/const/storybook'

import { NotificationList } from './NotificationList'

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
Normal.parameters = {
  mockData: [
    {
      url: __API__ + '/notifications',
      method: 'GET',
      status: 200,
      response: [
        { ...notification },
        { ...notification, id: 2 },
        { ...notification, id: 3 }
      ]
    }
  ]
}

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [
  StoreDecorator({})
]
Loading.parameters = {
  mockData: [
    {
      url: __API__ + '/notifications',
      method: 'GET',
      status: 200,
      response: [
        { ...notification },
        { ...notification, id: 2 },
        { ...notification, id: 3 }
      ],
      delay: 50000
    }
  ]
}
