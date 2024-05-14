import type { FeatureFlags } from '@/shared/types/featureFlags'

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER',
}

export interface User {
    id: string
    username: string
    avatar?: string
    features?: FeatureFlags
    roles?: UserRole[]
}

export interface UserSchema {
    authData?: User
    _inited: boolean
}
