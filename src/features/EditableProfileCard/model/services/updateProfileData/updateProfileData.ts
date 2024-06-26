import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type Profile } from '@/entities/Profile'

import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { ValidateProfileError } from '../../types/EditableProfileCardSchema'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<
    Profile,
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    void,
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi

    const formData = getProfileForm(getState())

    const errors = validateProfileData(formData)

    if (errors.length) {
        return rejectWithValue(errors)
    }

    try {
        const response = await extra.api.put<Profile>(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `/profile/${formData?.id}`,
            formData,
        )

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (e) {
        console.log(e)
        return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
})
