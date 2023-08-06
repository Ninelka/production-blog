import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import ArticlesPage from './ArticlesPage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { article } from 'shared/const/storybook'
import withMock from 'storybook-addon-mock'

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  decorators: [withMock]
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
  mockData: [
    {
      url: __API__ + '/articles?_expand=user&_limit=9&_page=2&_sort=createdAt&_order=asc&q=',
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
