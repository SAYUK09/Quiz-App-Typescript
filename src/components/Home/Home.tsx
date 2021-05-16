import React from "react";
import { useState } from "react";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";
import { red } from "@material-ui/core/colors";

export function Home() {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#3b82f6",
      fontSize: "1rem"
      // color:"white"
    }
  }));

  const classes = useStyles();

  return (
    <>
      <div className="homeParent">
        <div className="homeBody">
          <div className="headText">
            <h3>Let's test your knowledge</h3>
            <h2>So you think you can create content !</h2>
          </div>

          <div className="btnContainer">
            <Button className={classes.button} variant="contained">
              Take a Quiz
              <ArrowForwardIosRoundedIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
