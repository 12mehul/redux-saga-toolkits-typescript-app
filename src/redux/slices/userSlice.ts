import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersList } from "../types/IUsersList";

interface IUserInitial {
  loading: boolean;
  data: IUsersList[];
  userDetails: IUsersList | null;
  error: string | null;
  userId: number;
}
const initialState: IUserInitial = {
  loading: false,
  data: [],
  userDetails: null,
  error: null,
  userId: 0,
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
} = userSlice.actions;

export default userSlice.reducer;
