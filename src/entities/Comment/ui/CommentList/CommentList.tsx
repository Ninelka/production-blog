import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { type Comment } from '../../model/types/comment'
import { Text } from '@/shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { VStack } from '@/shared/ui/Stack'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <VStack max gap={'16'} className={classNames('', {}, [className])}>
        <CommentCard isLoading={true}/>
        <CommentCard isLoading={true}/>
        <CommentCard isLoading={true}/>
      </VStack>
    )
  }

  return (
    <VStack max gap={'16'} className={classNames('', {}, [className])}>
      {comments?.length
        ? comments.map(comment => (
          <CommentCard key={comment.id} comment={comment} isLoading={isLoading}/>
        ))
        : <Text text={t('Комментарии отсутствуют')}/>}
    </VStack>
  )
})

CommentList.displayName = 'CommentList'
