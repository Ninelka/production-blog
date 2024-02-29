import { type StateSchema } from '@/app/providers/StoreProvider'
import { getAddNewCommentError, getAddNewCommentText } from './getAddNewCommentSelectors'

describe('addNewCommentSlice.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      addNewComment: {
        text: '123123'
      }
    }
    expect(getAddNewCommentText(state as StateSchema)).toEqual('123123')
  })

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      addNewComment: {
        error: 'error'
      }
    }
    expect(getAddNewCommentError(state as StateSchema)).toEqual('error')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAddNewCommentText(state as StateSchema)).toEqual('')
  })
})
