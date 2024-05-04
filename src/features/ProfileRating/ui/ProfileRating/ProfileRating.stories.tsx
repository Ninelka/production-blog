import React from 'react'

import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { profileRatings } from '@/shared/const/storybook'
import { Theme } from '@/shared/const/theme'

import ProfileRating from './ProfileRating'

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
} as ComponentMeta<typeof ProfileRating>

const Template: ComponentStory<typeof ProfileRating> = (args) => (
    <ProfileRating {...args} />
)

const defaultMocks = {
    url: __API__ + '/profile-ratings?userId=1&profileId=1',
    method: 'GET',
    status: 200,
    response: [],
}

const defaultArgs = {
    profileId: '1',
}

const defaultStore = {
    user: {
        authData: {
            id: '1',
            username: 'admin',
        },
    },
}

export const NormalWithoutRate = Template.bind({})
NormalWithoutRate.args = defaultArgs
NormalWithoutRate.decorators = [StoreDecorator(defaultStore)]
NormalWithoutRate.parameters = {
    mockData: [defaultMocks],
}

export const DarkWithoutRate = Template.bind({})
DarkWithoutRate.args = defaultArgs
DarkWithoutRate.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(defaultStore),
]
DarkWithoutRate.parameters = {
    mockData: [defaultMocks],
}

export const NormalWithRate = Template.bind({})
NormalWithRate.args = defaultArgs
NormalWithRate.decorators = [StoreDecorator(defaultStore)]
NormalWithRate.parameters = {
    mockData: [
        {
            ...defaultMocks,
            response: [{ ...profileRatings }],
        },
    ],
}

export const DarkWithRate = Template.bind({})
DarkWithRate.args = defaultArgs
DarkWithRate.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(defaultStore),
]
DarkWithRate.parameters = {
    mockData: [
        {
            ...defaultMocks,
            response: [{ ...profileRatings }],
        },
    ],
}
