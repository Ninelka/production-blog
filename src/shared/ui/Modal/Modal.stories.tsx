import React from 'react'

import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Modal } from './Modal'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi dignissimos ducimus fugiat impedit ipsam laudantium modi nemo nihil, provident recusandae reiciendis, soluta ullam? At fugiat ipsam laudantium non quae.\n',
}

export const Dark = Template.bind({})
Dark.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi dignissimos ducimus fugiat impedit ipsam laudantium modi nemo nihil, provident recusandae reiciendis, soluta ullam? At fugiat ipsam laudantium non quae.\n',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
