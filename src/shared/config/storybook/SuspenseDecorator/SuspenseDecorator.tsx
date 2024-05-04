import { Suspense } from 'react'

import { type Story } from '@storybook/react'

export const SuspenseDecorator = (StoryComponent: Story) => (
    <Suspense>
        <StoryComponent />
    </Suspense>
)
