import { type CSSProperties, useMemo } from 'react'

import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import { Icon } from '@/shared/ui/Icon'
import { Skeleton } from '@/shared/ui/Skeleton'

import cls from './Avatar.module.scss'
import UserIcon from '../../assets/icons/user-filled.svg'
import { AppImage } from '../AppImage'

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
  fallbackInverted?: boolean
}

export const Avatar = ({ className, src, alt, size = 100, fallbackInverted }: AvatarProps) => {
  const mods: Mods = {}
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size
    }
  }, [size])
  const fallback = <Skeleton width={size} height={size} border='50%' />
  const errorFallback = <Icon width={size} height={size} Svg={UserIcon} inverted={fallbackInverted}/>

  return (
        <AppImage
          fallback={fallback}
          errorFallback={errorFallback}
          src={src}
          alt={alt}
          style={styles}
          className={classNames(cls.Avatar, mods, [className])}
        />
  )
}
