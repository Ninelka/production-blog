import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
    avatar: 'https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar.png'
  }
}

export const WithError = Template.bind({})
WithError.args = {
  error: 'error'
}
export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}
