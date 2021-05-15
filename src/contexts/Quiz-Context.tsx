import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import { quizDB } from "../components/Quiz/QuizDB";
import { Quiz } from "../types";

const initialState: initialStateType = {
  user: "",
  score: 0,
  status: "starting",
  currentQsNo: 0,
  currentquiz: "",
  correct: 0,
  wrong: 0,
  data: quizDB
};

export type initialStateType = {
  user: string;
  score: number;
  status: any;
  currentQsNo: number;
  currentquiz: string;
  correct: number;
  wrong: number;
  data: Quiz;
};

type CxtState = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
};

type ActionType = { type: "RIGHT" };

export const QuizContext = createContext({} as CxtState);

export function redcFunc(
  redcState: initialStateType,
  action: any
): initialStateType {
  switch (action.type) {
    case "RIGHT":
      return { ...redcState, currentQsNo: redcState.currentQsNo + 1 };
      break;

    default:
      return redcState;
      break;
  }
}

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(redcFunc, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export function useQuiz() {
  return useContext(QuizContext);
}
