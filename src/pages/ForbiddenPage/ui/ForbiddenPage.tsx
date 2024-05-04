import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

interface AdminPanelPageProps {
    className?: string
}

const ForbiddenPage = memo((props: AdminPanelPageProps) => {
    const { t } = useTranslation()

    return (
        <Page data-testid="ForbiddenPage">
            {t('У вас нет доступа к этой странице')}
        </Page>
    )
})

export default ForbiddenPage

ForbiddenPage.displayName = 'ForbiddenPage'
