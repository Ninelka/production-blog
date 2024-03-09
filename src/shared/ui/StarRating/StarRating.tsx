import { memo, useState } from 'react'

import StarIcon from '@/shared/assets/icons/star-20-20.svg'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './StarRating.module.scss'
import { Icon } from '../Icon/Icon'

interface StarRatingProps {
  className?: string
  onSelect?: (starCount: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo((props: StarRatingProps) => {
  const { className, size = 30, selectedStars = 0, onSelect } = props
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

  const onHover = (starCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onClick = (starCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starCount)
      setCurrentStarsCount(starCount)
      setIsSelected(true)
    }
  }

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
        {stars.map((starNumber) => (
          <Icon
            className={classNames(cls.starIcon, { [cls.hovered]: currentStarsCount >= starNumber, [cls.normal]: currentStarsCount < starNumber, [cls.selected]: isSelected }, [])}
                Svg={StarIcon}
                key={starNumber}
                width={size}
                height={size}
                onMouseEnter={onHover(starNumber)}
                onMouseLeave={onLeave}
                onClick={onClick(starNumber)}
          />
        ))}
    </div>
  )
})

StarRating.displayName = 'StarRating'
