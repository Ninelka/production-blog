import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Button, ButtonSize, ButtonVariant } from './Button'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ButtonVariant.CLEAR
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'Text',
  theme: ButtonVariant.CLEAR_INVERTED
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Text',
  theme: ButtonVariant.OUTLINE
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
  children: 'Text',
  theme: ButtonVariant.OUTLINE,
  size: ButtonSize.L
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
  children: 'Text',
  theme: ButtonVariant.OUTLINE,
  size: ButtonSize.XL
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Text',
  theme: ButtonVariant.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'Text',
  theme: ButtonVariant.BACKGROUND
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonVariant.BACKGROUND_INVERTED
}

export const Square = Template.bind({})
Square.args = {
  children: '>',
  theme: ButtonVariant.BACKGROUND_INVERTED,
  square: true
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: '>',
  theme: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
  children: '>',
  theme: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: '>',
  theme: ButtonVariant.OUTLINE,
  disabled: true
}
