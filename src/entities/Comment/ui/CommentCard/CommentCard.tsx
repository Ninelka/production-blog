import { memo } from 'react'

import { getRouteProfile } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Skeleton } from '@/shared/ui/Skeleton'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

import cls from './CommentCard.module.scss'
import { type Comment } from '../../model/types/comment'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
      <VStack max gap={'8'} className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <HStack>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={cls.username} />
        </HStack>
        <Skeleton width="100%" height={50} className={cls.text} />
      </VStack>
    )
  }

  if (!comment) return null

  return (
    <VStack max gap={'8'} className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar}/>}
        <Text title={comment.user.username} className={cls.username} />
      </AppLink>
      <Text text={comment.text} />
    </VStack>
  )
})

CommentCard.displayName = 'CommentCard'
