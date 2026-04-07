"use client";

import { use, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { topicsData } from "@/data/topics";

type Mode = "flashcards" | "short" | "exam";
type FilterMode = "all" | "wrong";
type ItemStatus = "correct" | "wrong" | null;

type ProgressState = {
  currentIndexByMode: Record<Mode, number>;
  statusByMode: Record<Mode, Record<number, ItemStatus>>;
};

const defaultProgress: ProgressState = {
  currentIndexByMode: {
    flashcards: 0,
    short: 0,
    exam: 0,
  },
  statusByMode: {
    flashcards: {},
    short: {},
    exam: {},
  },
};

export default function TopicPage({
  params,
}: {
  params: Promise<{ slug: string; topic: string }>;
}) {
  const { slug, topic } = use(params);
  const data = topicsData[topic];

  const [mode, setMode] = useState<Mode>("flashcards");
  const [filterMode, setFilterMode] = useState<FilterMode>("all");
  const [showAnswer, setShowAnswer] = useState(false);
  const [progress, setProgress] = useState<ProgressState>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);

  const storageKey = `topic-progress-${topic}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as ProgressState;
        setProgress({
          currentIndexByMode: {
            flashcards: parsed.currentIndexByMode?.flashcards ?? 0,
            short: parsed.currentIndexByMode?.short ?? 0,
            exam: parsed.currentIndexByMode?.exam ?? 0,
          },
          statusByMode: {
            flashcards: parsed.statusByMode?.flashcards ?? {},
            short: parsed.statusByMode?.short ?? {},
            exam: parsed.statusByMode?.exam ?? {},
          },
        });
      } catch {
        setProgress(defaultProgress);
      }
    }
    setIsLoaded(true);
  }, [storageKey]);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(storageKey, JSON.stringify(progress));
  }, [progress, storageKey, isLoaded]);

  const allItems = useMemo(() => {
    if (!data) return [];
    if (mode === "flashcards") return data.flashcards;
    if (mode === "short") return data.shortQuestions;
    return data.examQuestions;
  }, [data, mode]);

  const filteredIndexes = useMemo(() => {
    if (filterMode === "all") {
      return allItems.map((_, index) => index);
    }

    return allItems
      .map((_, index) => index)
      .filter((index) => progress.statusByMode[mode][index] === "wrong");
  }, [allItems, filterMode, mode, progress.statusByMode]);

  const savedIndexForMode = progress.currentIndexByMode[mode] ?? 0;

  const currentFilteredPosition = useMemo(() => {
    if (filteredIndexes.length === 0) return 0;

    const foundPosition = filteredIndexes.indexOf(savedIndexForMode);

    if (foundPosition !== -1) return foundPosition;

    return 0;
  }, [filteredIndexes, savedIndexForMode]);

  const currentOriginalIndex = filteredIndexes[currentFilteredPosition];
  const currentItem =
    currentOriginalIndex !== undefined ? allItems[currentOriginalIndex] : null;

  function updateCurrentIndex(modeToUpdate: Mode, newIndex: number) {
    setProgress((prev) => ({
      ...prev,
      currentIndexByMode: {
        ...prev.currentIndexByMode,
        [modeToUpdate]: newIndex,
      },
    }));
  }

  function updateStatus(modeToUpdate: Mode, itemIndex: number, status: ItemStatus) {
    setProgress((prev) => ({
      ...prev,
      statusByMode: {
        ...prev.statusByMode,
        [modeToUpdate]: {
          ...prev.statusByMode[modeToUpdate],
          [itemIndex]: status,
        },
      },
    }));
  }

  function switchMode(newMode: Mode) {
    setMode(newMode);
    setFilterMode("all");
    setShowAnswer(false);
  }

  function goNext() {
    if (filteredIndexes.length === 0) return;

    const nextPosition = currentFilteredPosition + 1;
    if (nextPosition < filteredIndexes.length) {
      updateCurrentIndex(mode, filteredIndexes[nextPosition]);
      setShowAnswer(false);
    }
  }

  function goPrev() {
    if (filteredIndexes.length === 0) return;

    const prevPosition = currentFilteredPosition - 1;
    if (prevPosition >= 0) {
      updateCurrentIndex(mode, filteredIndexes[prevPosition]);
      setShowAnswer(false);
    }
  }

  function markItem(status: "correct" | "wrong") {
    if (currentOriginalIndex === undefined) return;

    updateStatus(mode, currentOriginalIndex, status);
    setShowAnswer(false);

    if (filterMode === "wrong" && status === "correct") {
      const remainingWrong = filteredIndexes.filter(
        (index) => index !== currentOriginalIndex
      );

      if (remainingWrong.length > 0) {
        const nextIndex =
          remainingWrong[currentFilteredPosition] ??
          remainingWrong[currentFilteredPosition - 1] ??
          remainingWrong[0];
        updateCurrentIndex(mode, nextIndex);
      }
      return;
    }

    const nextPosition = currentFilteredPosition + 1;
    if (nextPosition < filteredIndexes.length) {
      updateCurrentIndex(mode, filteredIndexes[nextPosition]);
    }
  }

  function resetWrongAnswers() {
    setProgress((prev) => ({
      ...prev,
      statusByMode: {
        ...prev.statusByMode,
        [mode]: {},
      },
      currentIndexByMode: {
        ...prev.currentIndexByMode,
        [mode]: 0,
      },
    }));
    setFilterMode("all");
    setShowAnswer(false);
  }

  if (!data) {
    return (
      <main className="min-h-screen p-8">
        <Link
          href={`/subject/${slug}`}
          className="inline-block mb-4 text-sm border rounded-lg px-3 py-2 hover:bg-gray-100"
        >
          ← Back
        </Link>

        <h1 className="text-3xl font-bold capitalize mb-6">
          {topic.replaceAll("-", " ")}
        </h1>
        <p>No content yet for this topic.</p>
      </main>
    );
  }

  const currentStatus =
    currentOriginalIndex !== undefined
      ? progress.statusByMode[mode][currentOriginalIndex]
      : null;

  const wrongCount = Object.values(progress.statusByMode[mode]).filter(
    (value) => value === "wrong"
  ).length;

  const correctCount = Object.values(progress.statusByMode[mode]).filter(
    (value) => value === "correct"
  ).length;

  return (
    <main className="min-h-screen bg-white px-4 py-8 md:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/subject/${slug}`}
          className="inline-block mb-6 text-sm border rounded-lg px-3 py-2 hover:bg-gray-100 transition"
        >
          ← Back
        </Link>

        <h1 className="text-3xl font-bold capitalize mb-2">
          {topic.replaceAll("-", " ")}
        </h1>
        <p className="text-gray-600 mb-6">Study one step at a time</p>

        <div className="grid grid-cols-3 gap-2 mb-6">
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

        <div className="flex flex-wrap gap-2 mb-6">
          <FilterButton
            active={filterMode === "all"}
            onClick={() => setFilterMode("all")}
            label="All"
          />
          <FilterButton
            active={filterMode === "wrong"}
            onClick={() => setFilterMode("wrong")}
            label={`Wrong only (${wrongCount})`}
          />
          <button
            onClick={resetWrongAnswers}
            className="rounded-xl px-4 py-3 text-sm font-medium border border-gray-300"
          >
            Reset progress
          </button>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 flex-wrap">
          <span className="capitalize">{mode}</span>
          <span>Correct: {correctCount}</span>
          <span>Wrong: {wrongCount}</span>
          <span>
            {filteredIndexes.length > 0
              ? `${currentFilteredPosition + 1} / ${filteredIndexes.length}`
              : "0 / 0"}
          </span>
        </div>

        {currentItem ? (
          <div className="rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 min-h-[360px] flex flex-col justify-between">
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
                  onClick={() => markItem("correct")}
                  className={`rounded-xl px-4 py-3 font-medium border ${
                    currentStatus === "correct"
                      ? "bg-green-100 border-green-400"
                      : "border-gray-300"
                  }`}
                >
                  Correct
                </button>

                <button
                  onClick={() => markItem("wrong")}
                  className={`rounded-xl px-4 py-3 font-medium border ${
                    currentStatus === "wrong"
                      ? "bg-red-100 border-red-400"
                      : "border-gray-300"
                  }`}
                >
                  Wrong
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={goPrev}
                  disabled={filteredIndexes.length === 0 || currentFilteredPosition === 0}
                  className="rounded-xl border px-4 py-3 disabled:opacity-40"
                >
                  Previous
                </button>
                <button
                  onClick={goNext}
                  disabled={
                    filteredIndexes.length === 0 ||
                    currentFilteredPosition === filteredIndexes.length - 1
                  }
                  className="rounded-xl border px-4 py-3 disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 p-6">
            <p className="text-gray-700">
              No items found in this filter.
            </p>
          </div>
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

function FilterButton({
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
          ? "bg-gray-900 text-white border-gray-900"
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
      <p className="text-sm uppercase tracking-wide text-gray-500">
        Flashcard
      </p>
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
      <p className="text-sm uppercase tracking-wide text-gray-500">
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
      <p className="text-sm uppercase tracking-wide text-gray-500">
        Exam Question
      </p>
      <h2 className="text-2xl font-semibold leading-snug">
        {item.question}{" "}
        <span className="text-gray-500 font-medium">
          ({item.marks} marks)
        </span>
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