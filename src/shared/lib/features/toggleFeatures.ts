import type { FeatureFlags } from '@/shared/types/featureFlags'

import { getFeatureFlag } from '../features/setGetFeatures'

interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlags
    on: () => T
    off: () => T
}

export function toggleFeatures<T>({
    on,
    off,
    name,
}: ToggleFeaturesOptions<T>): T {
    if (getFeatureFlag(name)) {
        return on()
    }

    return off()
}
