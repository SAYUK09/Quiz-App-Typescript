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
  disable: false,
  showModal: false,
  data: quizDB
};

type StatusType = "starting" | "finished" | "Running";

export type initialStateType = {
  user: string;
  score: number;
  status: StatusType;
  currentQsNo: number;
  currentquiz: string;
  correct: number;
  wrong: number;
  disable: boolean;
  showModal:boolean;
  data: Quiz;
};

type CxtState = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
};

type ActionType =
  | { type: "RESET" }
  | { type: "RIGHT_ANS"; payload: { score: number } }
  | { type: "NEXT_QUE" }
  | { type: "WRONG_ANS"; payload: { score: number } }
  | { type: "TOGGLE_DISABLE" };

export const QuizContext = createContext({} as CxtState);

export function redcFunc(
  redcState: initialStateType,
  action: ActionType
): initialStateType {
  switch (action.type) {
    case "RESET":
      return {
        ...redcState,
        score: 0,
        currentQsNo: 0,
        correct: 0,
        wrong: 0,
        disable: false,
        showModal:false,
      };

    case "RIGHT_ANS":
      return { ...redcState, score: redcState.score + action.payload.score };
      break;

    case "WRONG_ANS":
      return { ...redcState, score: redcState.score - action.payload.score };
      break;

    case "NEXT_QUE":
      console.log(redcState.data.questions.length);
      if (redcState.currentQsNo + 1 < redcState.data.questions.length) {
        return {
          ...redcState,
          currentQsNo: redcState.currentQsNo + 1,
          disable: false,
          
        };
      } else {
        return {
          ...redcState,
          status: "finished",
          disable: true,
          showModal:true,
        };
      }

    case "TOGGLE_DISABLE":
      return { ...redcState, disable: !redcState.disable };

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
