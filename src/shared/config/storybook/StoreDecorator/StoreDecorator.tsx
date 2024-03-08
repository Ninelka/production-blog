import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
// TODO: убрать комментарии
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice'
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { profileReducer } from '@/features/EditableProfileCard/model/slice/profileSlice'
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice'
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { addNewCommentReducer } from '@/features/AddNewComment/model/slices/addNewCommentSlice'
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices'
import { scrollSaveReducer } from '@/features/ScrollSave'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addNewComment: addNewCommentReducer,
  articleDetailsPage: articleDetailsPageReducer,
  scrollSave: scrollSaveReducer
}

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent />
  </StoreProvider>
)
