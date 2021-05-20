import "./Timer.css";

import { useEffect, useState } from "react";
import { useQuiz } from "../../contexts/Quiz-Context";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export function Timer({ time }) {
  const { state, dispatch } = useQuiz();
  const [, rerender] = useState("");

  console.log("rerende");
  return (
    <div className="App">
      {/* <button onClick={() => rerender()}>Re render</button> */}
      <CountdownCircleTimer
        isPlaying
        duration={time}
        onComplete={() => {
          console.log("ccc");
          dispatch({ type: "NEXT_QUE" });

          return [true, 0];
        }}
        colors={[
          ["#004777", 0.33],
          ["#F7B801", 0.33],
          ["#A30000", 0.33]
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );

  // const { state, dispatch } = useQuiz();
  // const [time, setTime] = useState<number>(-1);

  // if (time === 0) {
  //   dispatch({ type: "NEXT_QUE" });
  // }

  // useEffect(() => {
  //   setTime(() => 30);
  // }, [state.currentQsNo]);

  // useEffect((): any => {
  //   const clearInterval = setInterval(() => {
  //     setTime((prev) => prev - 1);
  //   }, 1000);

  //   return clearInterval;
  // }, []);

  // return (
  //   <>
  //     <h1>{time}</h1>
  //   </>
  // );
}
