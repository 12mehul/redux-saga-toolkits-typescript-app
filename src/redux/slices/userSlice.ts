import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersList } from "../types/IUsersList";

interface IUserInitial {
  loading: boolean;
  data: IUsersList[];
  userDetails: IUsersList | null;
  error: string | null;
  userId: number;
  delLoader: boolean;
  message: string;
}
const initialState: IUserInitial = {
  loading: false,
  data: [],
  userDetails: null,
  error: null,
  userId: 0,
  delLoader: false,
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userRequest: (state: IUserInitial) => {
      state.loading = true;
    },
    userSuccess: (state: IUserInitial, action: PayloadAction<IUsersList[]>) => {
      state.loading = false;
      state.data = action.payload;
    },

    singleUserRequest: (state: IUserInitial, action: PayloadAction<number>) => {
      state.loading = true;
      state.userDetails = null;
      state.userId = action.payload;
    },
    singleUserSuccess: (
      state: IUserInitial,
      action: PayloadAction<IUsersList>
    ) => {
      state.loading = false;
      state.userDetails = action.payload;
    },

    singleUserUpdateRequest: (
      state: IUserInitial,
      action: PayloadAction<{ userId: number; userDetails: IUsersList }>
    ) => {
      state.loading = true;
      state.userId = action.payload.userId; // Assign userId
      state.userDetails = action.payload.userDetails; // Assign userDetails
    },
    singleUserUpdateSuccess: (
      state: IUserInitial,
      action: PayloadAction<IUsersList>
    ) => {
      state.loading = false;
      state.userDetails = action.payload;
    },

    singleUserDelRequest: (
      state: IUserInitial,
      action: PayloadAction<number>
    ) => {
      state.delLoader = true;
      state.userId = action.payload;
    },
    singleUserDelSuccess: (
      state: IUserInitial,
      action: PayloadAction<string>
    ) => {
      state.delLoader = false;
      state.message = action.payload;
    },

    userFailure: (state: IUserInitial, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  userRequest,
  userSuccess,
  userFailure,
  singleUserRequest,
  singleUserSuccess,
  singleUserUpdateRequest,
  singleUserUpdateSuccess,
  singleUserDelRequest,
  singleUserDelSuccess,
} = userSlice.actions;

export default userSlice.reducer;
