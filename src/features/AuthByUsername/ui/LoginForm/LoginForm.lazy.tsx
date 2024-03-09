import { type FC, lazy } from 'react'

import { type LoginFormProps } from './LoginForm'

export const LoginFormLazy = lazy < FC<LoginFormProps>>(async () => await import('./LoginForm'))
