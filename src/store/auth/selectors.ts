import type { RootState } from "../store";

export const errMsg = (state: RootState) => state.auth.err;
export const errPart = (state: RootState) => state.auth.select;
