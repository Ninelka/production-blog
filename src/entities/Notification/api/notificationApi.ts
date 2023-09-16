import { rtkApi } from 'shared/api/rtkApi'
import { type Notification } from '../model/types/notification'

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications'
      })
    })
  }),
  overrideExisting: module.hot?.status() === 'apply'
})

export const useNotifications = notificationApi.useGetNotificationsQuery
