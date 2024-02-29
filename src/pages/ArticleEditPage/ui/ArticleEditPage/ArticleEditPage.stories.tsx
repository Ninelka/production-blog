import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import ArticleEditPage from './ArticleEditPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage
} as ComponentMeta<typeof ArticleEditPage>

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
