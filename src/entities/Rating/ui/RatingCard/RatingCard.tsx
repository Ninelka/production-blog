import { memo, useCallback, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Button, ButtonVariant } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Drawer } from '@/shared/ui/Drawer'
import { Input } from '@/shared/ui/Input'
import { Modal } from '@/shared/ui/Modal'
import { HStack, VStack } from '@/shared/ui/Stack'
import { StarRating } from '@/shared/ui/StarRating'
import { Text } from '@/shared/ui/Text'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
    rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { t } = useTranslation()
    const isMobile = useDevice()
    const {
        className,
        onCancel,
        onAccept,
        hasFeedback,
        feedbackTitle,
        title,
        rate = 0,
    } = props
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(rate)
    const [feedback, setFeedback] = useState('')

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount)

            if (hasFeedback) {
                setIsModalOpen(true)
            } else {
                onAccept?.(selectedStarsCount)
            }
        },
        [hasFeedback, onAccept],
    )

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                data-testid="RatingCard.Input"
                placeholder={t('Ваш отзыв')}
                value={feedback}
                onChange={setFeedback}
            />
        </>
    )

    return (
        <Card data-testid="RatingCard" className={className} max>
            <VStack align={'center'} gap={'8'} max>
                <Text title={starsCount ? t('Спасибо за оценку!') : title} />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            {isMobile ? (
                <Drawer isOpen={isModalOpen} onClose={cancelHandle} lazy>
                    <VStack gap={'32'}>
                        {modalContent}
                        <Button fullWidth onClick={acceptHandle}>
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            ) : (
                <Modal isOpen={isModalOpen} onClose={cancelHandle} lazy>
                    <VStack max gap={'32'}>
                        {modalContent}
                        <HStack max gap={'16'} justify={'end'}>
                            <Button
                                data-testid="RatingCard.Close"
                                onClick={cancelHandle}
                                theme={ButtonVariant.OUTLINE_RED}
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button
                                data-testid="RatingCard.Send"
                                onClick={acceptHandle}
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            )}
        </Card>
    )
})

RatingCard.displayName = 'RatingCard'
