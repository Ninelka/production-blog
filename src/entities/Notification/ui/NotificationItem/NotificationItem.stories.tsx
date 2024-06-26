import React from 'react'

import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import { NotificationItem } from './NotificationItem'

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
    item: {
        id: '1',
        title: 'Уведомление 1',
        description: 'Произошло какое-то событие',
    },
}
Normal.decorators = [StoreDecorator({})]
