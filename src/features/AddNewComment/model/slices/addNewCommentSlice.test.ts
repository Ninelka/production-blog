import { type AddNewCommentSchema } from '../types/addNewCommentSchema'
import { addNewCommentActions, addNewCommentReducer } from './addNewCommentSlice'

describe('addNewCommentSlice.test', () => {
  test('test set comment text', () => {
    const state: DeepPartial<AddNewCommentSchema> = {}
    expect(addNewCommentReducer(state as AddNewCommentSchema, addNewCommentActions.setText('123123')
    )).toEqual({ text: '123123' })
  })
})
