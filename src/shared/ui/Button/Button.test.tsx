import { render, screen } from '@testing-library/react'

import { Button, ButtonVariant } from './Button'

describe('Button', () => {
    test('renders', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
    test('with theme has class clear', () => {
        render(<Button theme={ButtonVariant.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })
})
