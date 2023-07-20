import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './CommentList.module.scss'
import { type Comment } from '../../model/types/comment'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading={true} className={cls.comment}/>
        <CommentCard isLoading={true} className={cls.comment}/>
        <CommentCard isLoading={true} className={cls.comment}/>
      </div>
    )
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map(comment => (
          <CommentCard key={comment.id} comment={comment} isLoading={isLoading} className={cls.comment}/>
        ))
        : <Text text={t('Комментарии отсутствуют')}/>}
    </div>
  )
})

CommentList.displayName = 'CommentList'
