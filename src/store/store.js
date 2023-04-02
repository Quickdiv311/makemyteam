import { configureStore } from "@reduxjs/toolkit";
import { teamReducer } from "./reducers/TeamReducer";

export const store = configureStore({
    reducer: {
        teamReducer
    }
})