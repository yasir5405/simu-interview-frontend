import axios from "axios";
import api from "./axios";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ErrorResponse {
  success: false;
  message: string;
  error?: string;
}

export interface LoginSuccessResponse {
  success: true;
  message: string;
  token: string;
}

export interface RegisterSuccessResponse {
  success: true;
  message: string;
}

export interface MeSuccessResponse {
  success: true;
  message: string;
  user: {
    id: number;
    email: string;
    name: string;
    role: "USER" | "ADMIN";
    isEmailVerified: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export type LoginResponse = LoginSuccessResponse | ErrorResponse;
export type RegisterResponse = RegisterSuccessResponse | ErrorResponse;
export type MeResponse = MeSuccessResponse | ErrorResponse;

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  try {
    const response = await api.post("/auth/login", payload);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<ErrorResponse>(error)) {
      return error.response!.data;
    }
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};

export const register = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  try {
    const response = await api.post("/auth/signup", payload);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<ErrorResponse>(error)) {
      return error.response!.data;
    }
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};

export const getMe = async (): Promise<MeResponse> => {
  try {
    const response = await api.get("/auth/me");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<ErrorResponse>(error)) {
      return error.response!.data;
    }
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
