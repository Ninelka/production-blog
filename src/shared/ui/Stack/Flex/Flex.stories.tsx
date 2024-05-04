import React from 'react'

import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Flex } from './Flex'

export default {
    title: 'shared/Flex',
    component: Flex,
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Row = Template.bind({})
Row.args = {
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
}

export const RowGap = Template.bind({})
RowGap.args = {
    gap: '4',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
}

export const RowAlign = Template.bind({})
RowAlign.args = {
    align: 'start',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
}

export const Column = Template.bind({})
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
}

export const ColumnGap = Template.bind({})
ColumnGap.args = {
    direction: 'column',
    gap: '4',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
}

export const ColumnAlign = Template.bind({})
ColumnAlign.args = {
    direction: 'column',
    align: 'start',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </>
    ),
}
