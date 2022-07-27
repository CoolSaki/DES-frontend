import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./actions";
import { authState } from "./types";

const PREFIX = "auth";

const initialState: authState = {
  err: "",
  select: "",
};

const handleRegister = (state: authState, payload: any) => {
  if (payload.Success) {
  } else {
    state.select = payload.Error.State;
    state.err = payload.Error.Msg;
  }
};

const handleLogin = (state: authState, payload: any) => {
  if (payload.Success) {
    localStorage.setItem("userInfo", payload.Data);
  } else {
    state.select = payload.Error.State;
    state.err = payload.Error.Msg;
  }
};

export const authReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loginUser.fulfilled.type,
      (state: authState, action: PayloadAction<any>) => {
        handleLogin(state, action.payload);
      }
    );
    builder.addCase(
      registerUser.fulfilled.type,
      (state: authState, action: PayloadAction<any>) => {
        handleRegister(state, action.payload);
      }
    );
  },
});

export { loginUser, registerUser };
export default authReducer.reducer;
