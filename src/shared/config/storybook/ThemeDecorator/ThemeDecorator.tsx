import { type Story } from '@storybook/react'

import { ThemeProvider } from '@/app/providers/ThemeProvider'

import { type Theme } from '../../../const/theme'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    )
