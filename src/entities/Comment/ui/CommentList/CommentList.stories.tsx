import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { CommentList } from './CommentList'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'Hello world',
      user: { id: '1', username: 'Vasya' }
    },
    {
      id: '2',
      text: 'Comment 2',
      user: { id: '1', username: 'Petya' }
    }
  ]
}

export const Loading = Template.bind({})
Loading.args = {
  comments: [],
  isLoading: true
}

Normal.decorators = [
  StoreDecorator({})
]