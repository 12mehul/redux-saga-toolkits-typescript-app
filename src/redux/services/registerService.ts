import axios from "axios";
import { IRegister } from "../types/IRegister";

export const registerService = async (
  data: IRegister
): Promise<IRegister | null> => {
  try {
    const res = await axios.post(
      "https://66e066f02fb67ac16f2981b3.mockapi.io/api/users/register",
      data
    );
    return res.data;
  } catch (error: any) {
    return error?.response.data;
  }
};
