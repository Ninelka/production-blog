import React, { Suspense } from 'react'

import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import { ArticleInfiniteList } from './ArticleInfiniteList'

export default {
  title: 'pages/ArticlesPage/ArticleInfiniteList',
  component: ArticleInfiniteList
} as ComponentMeta<typeof ArticleInfiniteList>

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => (
  // eslint-disable-next-line i18next/no-literal-string
  <Suspense fallback={<div>Loading...</div>}>
    <ArticleInfiniteList {...args} />
  </Suspense>
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
