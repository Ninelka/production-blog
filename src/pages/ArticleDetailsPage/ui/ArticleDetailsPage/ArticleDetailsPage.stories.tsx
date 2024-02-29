import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ArticleDetailsPage from './ArticleDetailsPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { article } from '@/shared/const/storybook'
import withMock from 'storybook-addon-mock'

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
  component: ArticleDetailsPage,
  decorators: [withMock]
} as ComponentMeta<typeof ArticleDetailsPage>

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({
  articleDetails: {
    data: article
  }
})]
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
