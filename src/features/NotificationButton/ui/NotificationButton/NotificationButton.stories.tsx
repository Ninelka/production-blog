import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { NotificationButton } from './NotificationButton'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/NotificationButton',
  component: NotificationButton
} as ComponentMeta<typeof NotificationButton>

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
