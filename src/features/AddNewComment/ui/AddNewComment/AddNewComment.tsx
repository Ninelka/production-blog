import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { HStack } from '@/shared/ui/Stack'

import cls from './AddNewComment.module.scss'
import {
    getAddNewCommentError,
    getAddNewCommentText,
} from '../../model/selectors/getAddNewCommentSelectors'
import {
    addNewCommentActions,
    addNewCommentReducer,
} from '../../model/slices/addNewCommentSlice'

export interface AddNewCommentProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducer,
}

const AddNewComment = memo(
    ({ className, onSendComment }: AddNewCommentProps) => {
        const { t } = useTranslation()
        const text = useSelector(getAddNewCommentText)
        const error = useSelector(getAddNewCommentError)
        const dispatch = useAppDispatch()

        const onCommentTextChange = useCallback(
            (value: string) => {
                dispatch(addNewCommentActions.setText(value))
            },
            [dispatch],
        )

        const onSendHandler = useCallback(() => {
            onSendComment(text || '')
            onCommentTextChange('')
        }, [onCommentTextChange, onSendComment, text])

        if (error) {
            return null
        }

        return (
            <DynamicModuleLoader reducers={reducers}>
                <HStack
                    data-testid="AddNewComment"
                    max
                    justify={'between'}
                    className={classNames(cls.AddNewComment, {}, [className])}
                >
                    <Input
                        data-testid="AddNewComment.Input"
                        placeholder={t('Введите текст комментария')}
                        value={text}
                        onChange={onCommentTextChange}
                        className={cls.input}
                    />
                    <Button
                        data-testid="AddNewComment.Button"
                        onClick={onSendHandler}
                    >
                        {t('Отправить')}
                    </Button>
                </HStack>
            </DynamicModuleLoader>
        )
    },
)

export default AddNewComment

AddNewComment.displayName = 'AddNewComment'
