import React from 'react'

import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { RatingCard } from './RatingCard'

export default {
  title: 'entities/Rating/RatingCard',
  component: RatingCard
} as ComponentMeta<typeof RatingCard>

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />

export const Normal = Template.bind({})
export const WithTitle = Template.bind({})
export const WithFeedback = Template.bind({})
Normal.args = {}
WithTitle.args = {
  title: 'Ваш отзыв',
  feedbackTitle: 'Оставьте ваш отзыв',
  hasFeedback: true
}
WithFeedback.args = {
  title: 'Спасибо!',
  rate: 5
}
