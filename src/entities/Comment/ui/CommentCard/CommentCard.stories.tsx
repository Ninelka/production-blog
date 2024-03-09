import React from 'react'

import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import { CommentCard } from './CommentCard'

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
  comment: {
    id: '1',
    text: 'Hello world',
    user: { id: '1', username: 'Vasya' }
  }
}

export const Loading = Template.bind({})
Loading.args = {
  comment: {
    id: '1',
    text: 'Hello world',
    user: { id: '1', username: 'Vasya' }
  },
  isLoading: true
}

Normal.decorators = [
  StoreDecorator({})
]
