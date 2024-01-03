import { createSlice } from '@reduxjs/toolkit';


const FetchstatusSlice = createSlice({
    name: 'fetchstatus',
    initialState: {
        fetchDone : false,  //false : pending and true : done
        currentlyFetching : false,
    },
    reducers: {
        markFetchDone: (state) => {
            return state.fetchDone = true;
        },
        markFetchingStarted: (state)=>{
            return state.currentlyFetching = true;
        },
        markFetchingDone: (state)=>{
            return state.currentlyFetching = false;
        }
    }
});

export const FetchstatusAction = FetchstatusSlice.action;
export default FetchstatusSlice;
