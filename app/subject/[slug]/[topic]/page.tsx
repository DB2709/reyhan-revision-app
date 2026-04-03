"use client";

import { use, useMemo, useState } from "react";
import { topicsData } from "@/data/topics";

type Mode = "flashcards" | "short" | "exam";

export default function TopicPage({
  params,
}: {
  params: Promise<{ slug: string; topic: string }>;
}) {
  const { topic } = use(params);
  const data = topicsData[topic];

  const [mode, setMode] = useState<Mode>("flashcards");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const items = useMemo(() => {
    if (!data) return [];
    if (mode === "flashcards") return data.flashcards;
    if (mode === "short") return data.shortQuestions;
    return data.examQuestions;
  }, [data, mode]);

  const currentItem = items[currentIndex];

  function switchMode(newMode: Mode) {
    setMode(newMode);
    setCurrentIndex(0);
    setShowAnswer(false);
  }

  function goNext() {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  }

  function goPrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  }

  if (!data) {
    return (
      <main className="min-h-screen p-8">
        <h1 className="text-3xl font-bold capitalize mb-6">
          {topic.replaceAll("-", " ")}
        </h1>
        <p>No content yet for this topic.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-4 py-8 md:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold capitalize mb-2">
          {topic.replaceAll("-", " ")}
        </h1>
        <p className="text-gray-500 mb-8">Study one step at a time</p>

        <div className="grid grid-cols-3 gap-2 mb-8">
          <TabButton
            active={mode === "flashcards"}
            onClick={() => switchMode("flashcards")}
            label={`Flashcards (${data.flashcards.length})`}
          />
          <TabButton
            active={mode === "short"}
            onClick={() => switchMode("short")}
            label={`Quick (${data.shortQuestions.length})`}
          />
          <TabButton
            active={mode === "exam"}
            onClick={() => switchMode("exam")}
            label={`Exam (${data.examQuestions.length})`}
          />
        </div>

        {currentItem && (
          <>
            <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
              <span className="capitalize">{mode}</span>
              <span>
                {currentIndex + 1} / {items.length}
              </span>
            </div>

            <div className="rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 min-h-[320px] flex flex-col justify-between">
              <div>
                {mode === "flashcards" && (
                  <FlashcardView
                    item={currentItem as { question: string; answer: string }}
                    showAnswer={showAnswer}
                  />
                )}

                {mode === "short" && (
                  <ShortQuestionView
                    item={currentItem as { question: string; answer: string }}
                    showAnswer={showAnswer}
                  />
                )}

                {mode === "exam" && (
                  <ExamQuestionView
                    item={
                      currentItem as {
                        question: string;
                        marks: number;
                        markScheme: string[];
                      }
                    }
                    showAnswer={showAnswer}
                  />
                )}
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="rounded-xl bg-black text-white px-4 py-3 font-medium"
                >
                  {showAnswer ? "Hide answer" : "Show answer"}
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={goPrev}
                    disabled={currentIndex === 0}
                    className="rounded-xl border px-4 py-3 disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <button
                    onClick={goNext}
                    disabled={currentIndex === items.length - 1}
                    className="rounded-xl border px-4 py-3 disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

function TabButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-4 py-3 text-sm font-medium border transition ${
        active
          ? "bg-black text-white border-black"
          : "bg-white text-black border-gray-300"
      }`}
    >
      {label}
    </button>
  );
}

function FlashcardView({
  item,
  showAnswer,
}: {
  item: { question: string; answer: string };
  showAnswer: boolean;
}) {
  return (
    <div className="space-y-6">
      <p className="text-sm uppercase tracking-wide text-gray-400">Flashcard</p>
      <h2 className="text-2xl font-semibold leading-snug">{item.question}</h2>
      {showAnswer && (
        <div className="rounded-xl bg-green-50 border border-green-200 p-4">
          <p className="text-green-800 text-lg">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

function ShortQuestionView({
  item,
  showAnswer,
}: {
  item: { question: string; answer: string };
  showAnswer: boolean;
}) {
  return (
    <div className="space-y-6">
      <p className="text-sm uppercase tracking-wide text-gray-400">
        Quick Question
      </p>
      <h2 className="text-2xl font-semibold leading-snug">{item.question}</h2>
      {showAnswer && (
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-blue-900 text-lg">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

function ExamQuestionView({
  item,
  showAnswer,
}: {
  item: { question: string; marks: number; markScheme: string[] };
  showAnswer: boolean;
}) {
  return (
    <div className="space-y-6">
      <p className="text-sm uppercase tracking-wide text-gray-400">
        Exam Question
      </p>
      <h2 className="text-2xl font-semibold leading-snug">
        {item.question}{" "}
        <span className="text-gray-400 font-medium">({item.marks} marks)</span>
      </h2>
      {showAnswer && (
        <div className="rounded-xl bg-purple-50 border border-purple-200 p-4">
          <p className="font-medium mb-3 text-purple-900">Mark scheme</p>
          <ul className="space-y-2">
            {item.markScheme.map((point, i) => (
              <li key={i} className="text-purple-900">
                • {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}