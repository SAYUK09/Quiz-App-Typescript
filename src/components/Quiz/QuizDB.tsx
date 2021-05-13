import { Quiz } from "../../types";

export const quiz: Quiz = {
  quizName: "Content Create Kr Le",
  questions: [
    {
      question: "Ky kr rahe ho",
      points: 2,
      options: [
        {
          answer: "Nothing",
          isRight: false
        },
        {
          answer: "Code",
          isRight: false
        },
        {
          answer: "Just Thinking to code",
          isRight: true
        },
        {
          answer: "Sleeping",
          isRight: false
        }
      ]
    },
    {
      question: "Code kiya  ?",
      points: 5,
      options: [
        {
          answer: "Nahi",
          isRight: false
        },
        {
          answer: "Ha ",
          isRight: false
        },
        {
          answer: "Bahut jyada kiya",
          isRight: true
        },
        {
          answer: "Thoda Bahot",
          isRight: false
        }
      ]
    }
  ]
};
