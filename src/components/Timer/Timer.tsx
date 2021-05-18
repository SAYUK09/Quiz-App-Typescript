import { useEffect, useState } from "react";
import { useQuiz } from "../../contexts/Quiz-Context";

export function Timer() {
  const { state, dispatch } = useQuiz();
  const [time, setTime] = useState<number>(-1);

  if (time === 0) {
    dispatch({ type: "NEXT_QUE" });
  }

  useEffect(() => {
    setTime(() => 30);
  }, [state.currentQsNo]);

  useEffect((): any => {
    const clearInterval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return clearInterval;
  }, []);

  return (
    <>
      <h1>{time}</h1>
    </>
  );
}
