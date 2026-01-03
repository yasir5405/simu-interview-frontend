import axios from "axios";
import api from "./axios";

export interface QuestionsSuccessResponse {
  success: true;
  message: string;
  questions: {
    questionText: string;
    difficulty: string;
    type: string;
    options: string[] | null;
    createdAt: Date;
    id: number;
    topicId: number;
  }[];
}

export interface ErrorResponse {
  success: false;
  message: string;
  error?: string;
}

export type Questions = QuestionsSuccessResponse | ErrorResponse;

export const fetchQuestions = async ({
  difficulty,
  type,
  sort,
}: {
  difficulty?: string;
  type?: string;
  sort?: string;
}) => {
  try {
    const response = await api.get("/questions", {
      params: {
        difficulty,
        type,
        sort,
      },
    });
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
