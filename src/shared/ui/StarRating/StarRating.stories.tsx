import React from 'react'

import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { StarRating } from './StarRating'

export default {
  title: 'shared/StarRating',
  component: StarRating
} as ComponentMeta<typeof StarRating>

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />

export const NotSelected = Template.bind({})
export const Selected = Template.bind({})
NotSelected.args = {}
Selected.args = {
  selectedStars: 4
}
