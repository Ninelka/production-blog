import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleRecommendationsList } from './ArticleRecommendationsList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import withMock from 'storybook-addon-mock'
import { article } from '@/shared/const/storybook'

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [withMock]
} as ComponentMeta<typeof ArticleRecommendationsList>

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
  mockData: [
    {
      url: __API__ + '/articles?_limit=3',
      method: 'GET',
      status: 200,
      response: [
        { ...article },
        { ...article, id: '2' },
        { ...article, id: '3' }
      ]
    }
  ]
}
