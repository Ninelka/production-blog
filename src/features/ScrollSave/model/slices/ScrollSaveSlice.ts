import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type ScrollSaveSchema } from '../types/ScrollSaveSchema'

const initialState: ScrollSaveSchema = {
    scroll: {},
}

const scrollSaveSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position
        },
    },
})

export const { actions: scrollSaveActions } = scrollSaveSlice
export const { reducer: scrollSaveReducer } = scrollSaveSlice
