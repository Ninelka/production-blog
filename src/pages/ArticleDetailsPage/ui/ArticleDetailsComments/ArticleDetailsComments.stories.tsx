import React, { Suspense } from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ArticleDetailsComments } from './ArticleDetailsComments'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments
} as ComponentMeta<typeof ArticleDetailsComments>

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
  // eslint-disable-next-line i18next/no-literal-string
  <Suspense fallback={<div>Loading comments...</div>}>
    <ArticleDetailsComments {...args} />
  </Suspense>
)

export const Normal = Template.bind({})
Normal.args = {
  id: '1'
}
Normal.decorators = [StoreDecorator({})]
