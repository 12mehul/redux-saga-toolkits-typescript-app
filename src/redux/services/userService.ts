import axios from "axios";
import { IUsersList } from "../types/IUsersList";

export const userService = async () => {
  try {
    const res = await axios.get(
      "https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/register"
    );
    return res.data;
  } catch (error: any) {
    return error?.response.data;
  }
};

export const singleUserService = async (id: number) => {
  try {
    const res = await axios.get(
      `https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/register/${id}`
    );
    return res.data;
  } catch (error: any) {
    return error?.response.data;
  }
};

export const singleUserDelService = async (id: number) => {
  try {
    const res = await axios.delete(
      `https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/register/${id}`
    );
    return res.data;
  } catch (error: any) {
    return error?.response.data;
  }
};

export const singleUserUpdateService = async (
  id: number,
  data: IUsersList
): Promise<IUsersList | null> => {
  try {
    const res = await axios.put(
      `https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/register/${id}`,
      data
    );
    return res.data;
  } catch (error: any) {
    return error?.response.data;
  }
};
