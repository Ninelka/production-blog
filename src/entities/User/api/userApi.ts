import { rtkApi } from '@/shared/api/rtkApi'

import { type JsonSettings } from '../model/types/jsonSettings'
import { type User } from '../model/types/User'

interface SetJsonSettingsArgs {
    userId: string
    jsonSettings: JsonSettings
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        jsonSettings: build.mutation<User, SetJsonSettingsArgs>({
            query: ({ userId, jsonSettings }) => ({
                url: '/users/' + userId,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
    }),
})

export const setJsonSettingsMutation = userApi.endpoints.jsonSettings.initiate
