import { render } from "react-dom";

import App from "./App";

import { QuizProvider } from "./contexts/Quiz-Context";

const rootElement = document.getElementById("root");
render(
  <QuizProvider>
    <App />
  </QuizProvider>,
  rootElement
);
