import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ModeStateInterface } from '../../types';

const initialState: ModeStateInterface = {
    mode: 'Random',
};

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<ModeStateInterface>) => {
            state.mode = action.payload.mode;
        },
    },
});

export const { setMode } = modeSlice.actions;

export const selectMode = (state: RootState) => state.mode.mode;

export default modeSlice.reducer;
