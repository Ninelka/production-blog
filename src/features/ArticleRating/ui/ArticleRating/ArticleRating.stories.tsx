import React from 'react'

import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { articleRatings } from '@/shared/const/storybook'
import { Theme } from '@/shared/const/theme'

import ArticleRating from './ArticleRating'

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  decorators: [withMock]
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />

export const NormalWithoutRate = Template.bind({})
NormalWithoutRate.args = {
  articleId: '1'
}
NormalWithoutRate.decorators = [StoreDecorator({
  user: {
    authData: {
      id: '1'
    }
  }
})]
NormalWithoutRate.parameters = {
  mockData: [
    {
      url: __API__ + '/article-ratings?userId=1&articleId=1',
      method: 'GET',
      status: 200,
      response: []
    }
  ]
}

export const DarkWithoutRate = Template.bind({})
DarkWithoutRate.args = {
  articleId: '1'
}
DarkWithoutRate.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: {
      id: '1'
    }
  }
})]
DarkWithoutRate.parameters = {
  mockData: [
    {
      url: __API__ + '/article-ratings?userId=1&articleId=1',
      method: 'GET',
      status: 200,
      response: []
    }
  ]
}

export const NormalWithRate = Template.bind({})
NormalWithRate.args = {
  articleId: '1'
}
NormalWithRate.decorators = [StoreDecorator({
  user: {
    authData: {
      id: '1'
    }
  }
})]
NormalWithRate.parameters = {
  mockData: [
    {
      url: __API__ + '/article-ratings?userId=1&articleId=1',
      method: 'GET',
      status: 200,
      response: [
        { ...articleRatings }
      ]
    }
  ]
}

export const DarkWithRate = Template.bind({})
DarkWithRate.args = {
  articleId: '1'
}
DarkWithRate.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: {
      id: '1'
    }
  }
})]
DarkWithRate.parameters = {
  mockData: [
    {
      url: __API__ + '/article-ratings?userId=1&articleId=1',
      method: 'GET',
      status: 200,
      response: [
        { ...articleRatings }
      ]
    }
  ]
}
