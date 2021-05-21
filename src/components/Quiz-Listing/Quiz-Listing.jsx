import { BrowserRouter as Router, Link } from "react-router-dom";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export function QuizListing() {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#3b82f6",
      fontSize: "1rem"
    }
  }));

  const classes = useStyles();

  return (
    <>
      <Link className="routerLink" to="/quiz/quiz1">
        <Button className={classes.button} variant="contained">
          Quiz 1
          <ArrowForwardIosRoundedIcon />
        </Button>
      </Link>

      <Link className="routerLink" to="/quiz/quiz2">
        <Button className={classes.button} variant="contained">
          Quiz 2
          <ArrowForwardIosRoundedIcon />
        </Button>
      </Link>
    </>
  );
}
