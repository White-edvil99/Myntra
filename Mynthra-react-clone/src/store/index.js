import { configureStore } from '@reduxjs/toolkit';
import itemSlice from "./itemSlice";
import FetchstatusSlice from "./FetchstastusSlice"

const mynthraStore = configureStore({
    reducer: {
        items: itemSlice.reducer,
        fetchStatus: FetchstatusSlice.reducer
    }
})

export default mynthraStore;