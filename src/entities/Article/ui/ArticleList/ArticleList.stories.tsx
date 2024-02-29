import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleList } from './ArticleList'
import { ArticleView } from '../../model/types/article'
import { article } from '@/shared/const/storybook'

export default {
  title: 'entities/Article/ArticleList',
  component: ArticleList
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />

export const Grid = Template.bind({})
Grid.args = {
  articles: new Array(16).fill(0).map((item, index) => ({
    ...article,
    id: String(index)
  })),
  isLoading: false,
  view: ArticleView.GRID
}

export const GridLoading = Template.bind({})
GridLoading.args = {
  isLoading: true,
  view: ArticleView.GRID
}

export const List = Template.bind({})
List.args = {
  articles: new Array(16).fill(0).map((item, index) => ({
    ...article,
    id: String(index)
  })),
  isLoading: false,
  view: ArticleView.LIST
}

export const ListLoading = Template.bind({})
ListLoading.args = {
  isLoading: true,
  view: ArticleView.LIST
}
