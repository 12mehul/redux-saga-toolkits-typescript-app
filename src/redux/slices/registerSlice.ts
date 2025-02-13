import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegister } from "../types/IRegister";

interface IRegInitialState {
  loading: Boolean;
  data: IRegister;
  user: null;
  error: string | null;
}

const initialState: IRegInitialState = {
  loading: false,
  data: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  user: null,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    regRequest: (state: IRegInitialState, action: PayloadAction<IRegister>) => {
      state.loading = true;
      state.data = action.payload;
    },
    regSuccess: (state: IRegInitialState, action: PayloadAction<any>) => {
      state.loading = false;
      state.user = action.payload;
    },
    regError: (state: IRegInitialState, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { regRequest, regSuccess, regError } = registerSlice.actions;

export default registerSlice.reducer;
