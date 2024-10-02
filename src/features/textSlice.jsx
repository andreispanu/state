import { createSlice } from '@reduxjs/toolkit';

const textSlice = createSlice({
    name: 'text update',
    initialState: {
        value: ''
    },
    reducers: {
        setText: (state, action) => {
            state.value = action.payload;
        },
        removeText: (state) => {
            state.value = '';
        }
    }
});

export const { setText, removeText } = textSlice.actions;

export default textSlice.reducer;