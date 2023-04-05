import { createSlice } from "@reduxjs/toolkit";

const canSlice = createSlice({
    name: 'can',
    initialState: {
        canSelectAnnounced: false,
        canRejectAnnounced: false,
        canSelectSub: false,
        canAnnounceSub: false
    },
    reducers: {
        canSelectAnnouncedItem: (state,action) => {
            state.canSelectAnnounced = true;
            state.canRejectAnnounced = false;
        },

        canRejectAnnouncedItem: (state,action) => {
            state.canRejectAnnounced = true;
            state.canSelectAnnounced = false;
        },

        canSelectSubItem: (state,action) => {
            state.canSelectSub = true;
            state.canAnnounceSub = false;
        },

        canAnnounceSubItem: (state,action) => {
            state.canAnnounceSub = true;
            state.canSelectSub = false;
        },
    }
});

export const canReducer = canSlice.reducer;
export const {canSelectAnnouncedItem, canRejectAnnouncedItem, canSelectSubItem, canAnnounceSubItem} = canSlice.actions;
export const canSelectAnnounced = (state) => state.canReducer.canSelectAnnounced;
export const canRejectAnnounced = (state) => state.canReducer.canRejectAnnounced;
export const canSelectSub = (state) => state.canReducer.canSelectSub;
export const canAnnounceSub = (state) => state.canReducer.canAnnounceSub;
