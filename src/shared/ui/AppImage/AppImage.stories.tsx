import React from 'react'

import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'

import UserIcon from '@/shared/assets/icons/user-filled.svg'
import { Icon } from '@/shared/ui/Icon'
import { Skeleton } from '@/shared/ui/Skeleton'

import { AppImage } from './AppImage'

export default {
  title: 'shared/AppImage',
  component: AppImage,
  decorators: [withMock]
} as ComponentMeta<typeof AppImage>

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />

const defaultArgs = {
  src: __API__ + '/some-image.png',
  alt: 'avatar'
}
const size = 100
const fallback = <Skeleton width={size} height={size} border='50%' />
const errorFallback = <Icon width={size} height={size} Svg={UserIcon} inverted={true}/>

export const withFallback = Template.bind({})
export const withErrorFallback = Template.bind({})
withFallback.args = {
  ...defaultArgs,
  fallback
}
withFallback.parameters = {
  mockData: [
    {
      url: __API__ + '/some-image.png',
      method: 'GET',
      status: 200,
      response: [],
      delay: 50000
    }
  ]
}

withErrorFallback.args = {
  ...defaultArgs,
  fallback,
  errorFallback
}
