import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ProfileRating from './ProfileRating'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { profileRatings } from '@/shared/const/storybook'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import withMock from 'storybook-addon-mock'

export default {
  title: 'features/ProfileRating',
  component: ProfileRating,
  decorators: [withMock]
} as ComponentMeta<typeof ProfileRating>

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />

export const NormalWithoutRate = Template.bind({})
NormalWithoutRate.args = {}
NormalWithoutRate.decorators = [StoreDecorator({})]

export const DarkWithoutRate = Template.bind({})
DarkWithoutRate.args = {}
DarkWithoutRate.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const NormalWithRate = Template.bind({})
NormalWithRate.args = {
  profileId: '1'
}
NormalWithRate.decorators = [StoreDecorator({
  user: {
    authData: {
      id: '1',
      username: 'admin'
    }
  }
})]
NormalWithRate.parameters = {
  mockData: [
    {
      url: __API__ + '/profile-ratings?userId=1&profileId=1',
      method: 'GET',
      status: 200,
      response: [
        { ...profileRatings }
      ]
    }
  ]
}

export const DarkWithRate = Template.bind({})
DarkWithRate.args = {
  profileId: '1'
}
DarkWithRate.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: {
      id: '1',
      username: 'admin'
    }
  }
})]
