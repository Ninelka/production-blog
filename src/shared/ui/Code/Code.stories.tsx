import React from 'react'

import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Code } from './Code'

export default {
    title: 'shared/Code',
    component: Code,
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Normal = Template.bind({})
Normal.args = {
    text: `
    export const Code = memo(({ className, children }: CodeProps) => {
      return (
        <code className={classNames(cls.Code, {}, [className])}>
            {children }
        </code>
      )
    })
  `,
}
