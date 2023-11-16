import { PayloadAction, createSlice } from '@reduxjs/toolkit'


const popupStatusSlice = createSlice({
  name: 'popupStatus',
  initialState: {
    isAcive: false,
  },
  reducers: {
    changePopupStatus: (state, action: PayloadAction<boolean>) => {
      state.isAcive = action.payload;
    }
  }
})

export default popupStatusSlice.reducer

export const { changePopupStatus } = popupStatusSlice.actions;