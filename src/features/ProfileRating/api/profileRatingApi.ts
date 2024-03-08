import { rtkApi } from '@/shared/api/rtkApi'
import { type Rating } from '@/entities/Rating'

interface GetProfileRatingArg {
  profileId: string
  userId: string
}

interface RateProfileArg {
  profileId: string
  userId: string
  rate: number
  feedback?: string
}

const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRating: build.query<Rating[], GetProfileRatingArg>({
      query: ({ userId, profileId }) => ({
        url: '/profile-ratings',
        params: {
          userId,
          profileId
        }
      })
    }),
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    rateProfile: build.mutation<void, RateProfileArg>({
      query: (arg) => ({
        url: '/profile-ratings',
        method: 'POST',
        body: arg
      })
    })
  })
})

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery
export const useRateProfile = profileRatingApi.useRateProfileMutation
