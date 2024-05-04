import React from 'react'

import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Popover } from './Popover'
import { Button } from '../../../Button/Button'

export default {
    title: 'shared/Popover',
    component: Popover,
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />

export const Normal = Template.bind({})
Normal.args = {
    // eslint-disable-next-line i18next/no-literal-string
    trigger: <Button>Open</Button>,
    children: <div></div>,
}
