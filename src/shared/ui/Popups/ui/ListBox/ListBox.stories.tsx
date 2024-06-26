import React from 'react'

import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ListBox } from './ListBox'

export default {
    title: 'shared/ListBox',
    component: ListBox,
    decorators: [
        (Story) => (
            <div style={{ padding: '100px' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Normal = Template.bind({})
Normal.args = {
    items: [
        { value: '1', content: '123' },
        { value: '2', content: '123', disabled: true },
        { value: '3', content: '123' },
    ],
    defaultValue: 'Выберите значение',
    onChange: (value) => {},
    value: undefined,
}

export const Dark = Template.bind({})
Dark.args = {
    items: [
        { value: '1', content: '123' },
        { value: '2', content: '123', disabled: true },
        { value: '3', content: '123' },
    ],
    defaultValue: 'Выберите значение',
    onChange: (value) => {},
    value: undefined,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const WithLabel = Template.bind({})
WithLabel.args = {
    items: [
        { value: '1', content: '123' },
        { value: '2', content: '123', disabled: true },
        { value: '3', content: '123' },
    ],
    label: 'Выберите значение',
    defaultValue: 'Выберите значение',
    onChange: (value) => {},
    value: undefined,
}
