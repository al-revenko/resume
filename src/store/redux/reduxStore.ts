import { configureStore } from '@reduxjs/toolkit'
import popupStatusSlice from './slices/popupStatus.slice'

const reduxStore = configureStore({
  reducer: {
    'popupStatus': popupStatusSlice,
  }
})

export default reduxStore;

export type RootState = ReturnType<typeof reduxStore.getState>

export type AppDispatch = typeof reduxStore.dispatch