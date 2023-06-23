import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './CommentCard.module.scss'
import { type Comment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton width="100%" height={50} className={cls.text} />
      </div>
    )
  }

  if (!comment) return null

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath[AppRoutes.PROFILE]}${comment.user.id}`} className={cls.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar}/>}
        <Text title={comment.user.username} className={cls.username} />
      </AppLink>
      <Text text={comment.text} className={cls.text} />
    </div>
  )
})

CommentCard.displayName = 'CommentCard'
