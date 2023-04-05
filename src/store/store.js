import { configureStore } from "@reduxjs/toolkit";
import { teamReducer } from "./reducers/TeamReducer";
import { canReducer } from "./reducers/CanReducer";

export const store = configureStore({
    reducer: {
        teamReducer,
        canReducer
    }
})