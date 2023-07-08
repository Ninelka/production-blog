import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ArticlesSortSelector } from './ArticlesSortSelector'

export default {
  title: 'features/ArticlesSortSelector',
  component: ArticlesSortSelector
} as ComponentMeta<typeof ArticlesSortSelector>

const Template: ComponentStory<typeof ArticlesSortSelector> = (args) => <ArticlesSortSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {}
