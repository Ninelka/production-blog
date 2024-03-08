import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleDetails } from './ArticleDetails'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { article } from '@/shared/const/storybook'

export default {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({
  articleDetails: {
    data: article
  }
})]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({
  articleDetails: {
    isLoading: true
  }
})]

export const Error = Template.bind({})
Error.args = {}
Error.decorators = [StoreDecorator({
  articleDetails: {
    error: 'error'
  }
})]
