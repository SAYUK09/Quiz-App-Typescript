import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import { quizDB } from "../components/Quiz/QuizDB";
import { Quiz } from "../types";

type CxtState = {
  state: Quiz;
  dispatch: React.Dispatch<any>;
};

export const QuizContext = createContext({} as CxtState);

export function redcFunc(redcState: Quiz, action: any): Quiz {
  console.log(redcState);
  return redcState;
}

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(redcFunc, quizDB);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export function useQuiz() {
  return useContext(QuizContext);
}
