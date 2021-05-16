import { useState } from "react";
import "./Quiz.css"

import { useQuiz } from "../../contexts/Quiz-Context";

export function Quiz() {
  const { state, dispatch } = useQuiz();
  // const [disable, setDisable] = useState(false);
  console.log(state);

  return (
    <>
      <div className="quizParent">

      
      <b> {state.status}</b>

      <h2>{state.data.quizName}</h2>
      <b>Score : {state.score}</b>

      <h3>{state.data.questions[state.currentQsNo].question}</h3>
      <div>
        {state.data.questions[state.currentQsNo].options.map((item) => (
          <button
            disabled={state.disable}
            onClick={() => {
              dispatch({ type: "TOGGLE_DISABLE" });
              if (item.isRight) {
                dispatch({ type: "RIGHT_ANS" });
              } else {
                dispatch({ type: "WRONG_ANS" });
              }
            }}
          >
            {item.answer}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          dispatch({ type: "TOGGLE_DISABLE" });

          dispatch({ type: "NEXT_QUE" });
        }}
      >
        NEXT
      </button>

      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        RESET
      </button>
      </div>
    </>
  );
}
