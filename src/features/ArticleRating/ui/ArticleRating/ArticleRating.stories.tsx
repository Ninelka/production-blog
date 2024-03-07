import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ArticleRating from './ArticleRating'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { articleRatings } from '@/shared/const/storybook'
import withMock from 'storybook-addon-mock'

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  decorators: [withMock]
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />

export const NormalWithoutRate = Template.bind({})
NormalWithoutRate.args = {}
NormalWithoutRate.decorators = [StoreDecorator({})]

export const DarkWithoutRate = Template.bind({})
DarkWithoutRate.args = {}
DarkWithoutRate.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const NormalWithRate = Template.bind({})
NormalWithRate.args = {
  articleId: '1'
}
NormalWithRate.decorators = [StoreDecorator({
  user: {
    authData: {
      id: '1',
      username: 'admin'
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
      id: '1',
      username: 'admin'
    }
  }
})]
