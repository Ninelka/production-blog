import React from 'react'

import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import ProfilePage from './ProfilePage'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [withMock],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'ulbi tv',
      first: 'asd',
      city: 'asf',
      currency: Currency.USD
    }
  }
})]
Normal.parameters = {
  mockData: [
    {
      url: __API__ + '/profile-ratings?userId=&profileId=',
      method: 'GET',
      status: 200,
      response: []
    }
  ]
}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'ulbi tv',
      first: 'asd',
      city: 'asf',
      currency: Currency.USD
    }
  }
})]
