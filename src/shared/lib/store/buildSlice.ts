import { useMemo } from 'react'

import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import {
    type SliceCaseReducers,
    type CreateSliceOptions,
} from '@reduxjs/toolkit/dist'
import { useDispatch } from 'react-redux'

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options)

    const useActions = (): typeof slice.actions => {
        const dispatch = useDispatch()

        // @ts-expect-error to fix slice.actions type
        return useMemo(
            // @ts-expect-error to fix slice.actions type
            () => bindActionCreators(slice.actions, dispatch),
            [dispatch],
        )
    }
    return {
        ...slice,
        useActions,
    }
}
