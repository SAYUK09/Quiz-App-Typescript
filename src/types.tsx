export type Quiz = {
  quizName: string;
  questions: Questions[];
};

export type Questions = {
  question: string;
  points: number;
  options: Options[];
};

export type Options = {
  answer: string;
  isRight: boolean;
};
