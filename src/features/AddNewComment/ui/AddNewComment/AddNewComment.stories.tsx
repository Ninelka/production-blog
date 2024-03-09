import React from 'react'

import { action } from '@storybook/addon-actions'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import AddNewComment from './AddNewComment'

export default {
  title: 'features/AddNewComment',
  component: AddNewComment
} as ComponentMeta<typeof AddNewComment>

const Template: ComponentStory<typeof AddNewComment> = (args) => <AddNewComment {...args} />

export const Normal = Template.bind({})
Normal.args = {
  onSendComment: action('onSendComment')
}
Normal.decorators = [
  StoreDecorator({})
]
