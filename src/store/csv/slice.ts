import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface InitState {
	texts: Record<string, unknown>
}

const initialState: InitState = {
	texts: {},
};

export const csvSlice = createSlice({
	name: "csv",
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<{ title: string, body: unknown }>) => {
			state.texts[action.payload.title] = action.payload.body
		},
	},
});

export const { setText } = csvSlice.actions;

export const csvReducer = csvSlice.reducer;
