export type Flashcard = {
  question: string;
  answer: string;
};

export type ShortQuestion = {
  question: string;
  answer: string;
};

export type ExamQuestion = {
  question: string;
  marks: number;
  markScheme: string[];
};

export type TopicContent = {
  flashcards: Flashcard[];
  shortQuestions: ShortQuestion[];
  examQuestions: ExamQuestion[];
};