import React from 'react'

import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Skeleton } from './Skeleton'

export default {
  title: 'shared/Skeleton',
  component: Skeleton
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Normal = Template.bind({})
Normal.args = {
  width: '100%',
  height: 200
}
Normal.parameters = {
  loki: { skip: true }
}

export const Circle = Template.bind({})
Circle.args = {
  width: 100,
  height: 100,
  border: '50%'
}

export const NormalDark = Template.bind({})
NormalDark.args = {
  width: '100%',
  height: 200
}
NormalDark.parameters = {
  loki: { skip: true }
}
NormalDark.decorators = [ThemeDecorator(Theme.DARK)]

export const CircleDark = Template.bind({})
CircleDark.args = {
  width: 100,
  height: 100,
  border: '50%'
}
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]
