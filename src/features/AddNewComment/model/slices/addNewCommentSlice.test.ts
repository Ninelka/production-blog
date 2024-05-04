import {
    addNewCommentActions,
    addNewCommentReducer,
} from './addNewCommentSlice'
import { type AddNewCommentSchema } from '../types/addNewCommentSchema'

describe('addNewCommentSlice.test', () => {
    test('test set comment text', () => {
        const state: DeepPartial<AddNewCommentSchema> = {}
        expect(
            addNewCommentReducer(
                state as AddNewCommentSchema,
                addNewCommentActions.setText('123123'),
            ),
        ).toEqual({ text: '123123' })
    })
})
