import { type FC, lazy } from 'react'

import { type AddNewCommentProps } from './AddNewComment'

export const AddNewCommentLazy = lazy<FC<AddNewCommentProps>>(
    async () => await import('./AddNewComment'),
)
