import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './ArticleViewSelector.module.scss'
import { ArticleView } from '../../model/types/article'
import ListIcon from '@/shared/assets/icons/list-24-24.svg'
import TileIcon from '@/shared/assets/icons/tiled-24-24.svg'
import { Button, ButtonVariant } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: TileIcon
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon
  }
]

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
        {viewTypes.map(viewType => (
          <Button
            key={viewType.view}
            theme={ButtonVariant.CLEAR}
            onClick={onClick(viewType.view)}
          >
              <Icon
                Svg={viewType.icon}
                className={classNames('', { [cls.selected]: viewType.view === view })}
              />
          </Button>
        ))}
    </div>
  )
})

ArticleViewSelector.displayName = 'ArticleViewSelector'
