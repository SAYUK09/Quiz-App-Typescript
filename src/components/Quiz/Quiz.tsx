import { useQuiz } from "../../contexts/Quiz-Context";

export function Quiz() {
  const { state, dispatch } = useQuiz();
  console.log(state);

  return (
    <>
      <h2>{state.data.quizName}</h2>
      <h3>{state.data.questions[state.currentQsNo].question}</h3>
      <div>
        {state.data.questions[state.currentQsNo].options.map((ans) => (
          <button
            onClick={() => {
              console.log(ans.isRight);
              if (ans.isRight) {
                dispatch({ type: "RIGHT" });
              }
            }}
          >
            {ans.answer}
          </button>
        ))}
      </div>
    </>
  );
}
