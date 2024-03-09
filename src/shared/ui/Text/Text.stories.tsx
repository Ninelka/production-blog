import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Text, TextSize, TextTheme } from './Text'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title lorem ipsum',
  text: 'Description'
}

export const Error = Template.bind({})
Error.args = {
  title: 'Title lorem ipsum',
  text: 'Description',
  theme: TextTheme.ERROR
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Title lorem ipsum'
}

export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'Description only'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Title lorem ipsum',
  text: 'Description'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: 'Title lorem ipsum'
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  text: 'Description only'
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeL = Template.bind({})
SizeL.args = {
  title: 'Title lorem ipsum',
  text: 'Description',
  size: TextSize.L
}
