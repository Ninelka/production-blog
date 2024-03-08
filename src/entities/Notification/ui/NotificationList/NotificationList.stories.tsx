import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { NotificationList } from './NotificationList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import withMock from 'storybook-addon-mock'
import { notification } from '@/shared/const/storybook'

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  decorators: [withMock]
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
