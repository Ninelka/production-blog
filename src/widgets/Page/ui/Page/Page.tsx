import {
    type MutableRefObject,
    type ReactNode,
    useRef,
    type UIEvent,
} from 'react'

import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { type StateSchema } from '@/app/providers/StoreProvider'
import { getScrollByPath, scrollSaveActions } from '@/features/ScrollSave'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'
import { type TestProps } from '@/shared/types/testProps'

import cls from './Page.module.scss'

interface PageProps extends TestProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollByPath(state, pathname),
    )

    useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollSaveActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        )
    }, 500)

    return (
        <main
            data-testid={props['data-testid'] ?? 'Page'}
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </main>
    )
}
