import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchForexData = createAsyncThunk(
  'forex/fetchForexData',
  async () => {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    return response.data;
  }
);


const forexSlice = createSlice({
  name: 'forex',
  initialState: {
    data: {},
    loading: false,
    error: null as string | null | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForexData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchForexData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchForexData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default forexSlice.reducer;
