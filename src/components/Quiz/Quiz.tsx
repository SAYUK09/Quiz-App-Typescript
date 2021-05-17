import { useState } from "react";
import "./Quiz.css";
import { useQuiz } from "../../contexts/Quiz-Context";
import {Modals} from "../Modal/Modal"

import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import Button from "@material-ui/core/Button";


export function Quiz() {
  const { state, dispatch } = useQuiz();

  console.log(state);

  const useChip = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        "& > *": {
          margin: theme.spacing(0.5),
          // fontWeight: "bolder",
          alignItems: "center",
          color: "white"
        }
      }
    })
  );

  const useButton = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& > *": {
          margin: theme.spacing(1),
          color: "white",
          padding: "0rem"
        }
      }
    })
  );

  const useSecButton = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& > *": {
          margin: theme.spacing(1),
          color: "color"
        }
      }
    })
  );

  const chip = useChip();
  const button = useButton();
  const secBtn = useSecButton();


  return (
    <>
    {/* <Modals/> */}
    {state.showModal && <Modals/>}
      <div className="quizParent">
        <div className="quizBody">
          <div className="headContainer">
            <h3>
              {" "}
              <BubbleChartIcon /> {state.data.quizName}
            </h3>
            <Chip
              className={chip.root}
              variant="outlined"
              size="small"
              label={state.status}
            />
          </div>

          <div className="scoreContainer">
            <p>Score : {state.score}</p>
          </div>

          <div className="quesContainer">
            <h3>Q : {state.data.questions[state.currentQsNo].question}</h3>
          </div>

          <div className="optDiv">
            {state.data.questions[state.currentQsNo].options.map((item) => (
              <button
                disabled={state.disable}
                onClick={() => {
                  dispatch({ type: "TOGGLE_DISABLE" });
                  if (item.isRight) {
                    dispatch({
                      type: "RIGHT_ANS",
                      payload: {
                        score: state.data.questions[state.currentQsNo].points
                      }
                    });
                  } else {
                    dispatch({
                      type: "WRONG_ANS",
                      payload: {
                        score: state.data.questions[state.currentQsNo].points
                      }
                    });
                  }
                }}
              >
                {item.answer}
              </button>
            ))}
          </div>

          <div className="submitButtonDiv">
            <Button
              onClick={() => {
                dispatch({ type: "RESET" });
              }}
              className={button.root}
              variant="contained"
              color="primary"
            >
              Reset
            </Button>

            <Button
              onClick={() => {
                dispatch({ type: "TOGGLE_DISABLE" });

                dispatch({ type: "NEXT_QUE" });
              }}
              className={secBtn.root}
              variant="outlined"
              color="primary"
            >
              Next
            </Button>

            {/* <button
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
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
