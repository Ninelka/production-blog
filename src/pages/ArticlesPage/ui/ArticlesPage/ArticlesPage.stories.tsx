import React from 'react'

import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { article } from '@/shared/const/storybook'

import ArticlesPage from './ArticlesPage'

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                jsonSettings: {
                    isArticlesPageWasOpened: true,
                },
            },
        },
    }),
]
Normal.parameters = {
    mockData: [
        {
            url:
                __API__ +
                '/articles?_expand=user&_limit=9&_page=2&_sort=createdAt&_order=asc&q=',
            method: 'GET',
            status: 200,
            response: [
                { ...article },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],
        },
    ],
}
