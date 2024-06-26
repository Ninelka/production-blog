import { type ReactElement } from 'react'

import { type FeatureFlags } from '@/shared/types/featureFlags'

import { getFeatureFlag } from '../setGetFeatures'

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags
    on: ReactElement
    off: ReactElement
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { feature, on, off } = props

    if (getFeatureFlag(feature)) {
        return on
    }

    return off
}
