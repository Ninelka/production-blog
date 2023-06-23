import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import cls from './AddNewComment.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getAddNewCommentError, getAddNewCommentText } from '../../model/selectors/getAddNewCommentSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addNewCommentActions, addNewCommentReducer } from '../../model/slices/addNewCommentSlice'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface AddNewCommentProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addNewComment: addNewCommentReducer
}

const AddNewComment = memo(({ className, onSendComment }: AddNewCommentProps) => {
  const { t } = useTranslation()
  const text = useSelector(getAddNewCommentText)
  const error = useSelector(getAddNewCommentError)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addNewCommentActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  if (error) {
    return null
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddNewComment, {}, [className])}>
        <Input
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onCommentTextChange}
          className={cls.input}
        />
        <Button onClick={onSendHandler}>{t('Отправить')}</Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default AddNewComment
