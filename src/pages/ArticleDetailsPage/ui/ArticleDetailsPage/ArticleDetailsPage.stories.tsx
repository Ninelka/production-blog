import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ArticleDetailsPage from './ArticleDetailsPage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { article } from 'shared/const/storybook'

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
  component: ArticleDetailsPage
} as ComponentMeta<typeof ArticleDetailsPage>

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({
  articleDetails: {
    data: article
  }
})]
