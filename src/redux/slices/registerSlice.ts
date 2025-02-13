import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegister } from "../types/IRegister";

interface IRegInitialState {
  loading: boolean;
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
      state.data = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      };
    },
    regError: (state: IRegInitialState, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
    regUpdate: (
      state: IRegInitialState,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      state.data = {
        ...state.data,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});

export const { regRequest, regSuccess, regError, regUpdate } =
  registerSlice.actions;

export default registerSlice.reducer;
