"use client";

import { use, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { topicsData } from "../../../../data/topics";

type Mode = "flashcards" | "short" | "exam";
type FilterMode = "all" | "wrong";
type ItemStatus = "correct" | "wrong" | null;

type ProgressState = {
  currentIndexByMode: Record<Mode, number>;
  statusByMode: Record<Mode, Record<number, ItemStatus>>;
  scoreByMode: Record<Mode, number>;
  streakByMode: Record<Mode, number>;
  bestStreakByMode: Record<Mode, number>;
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
  scoreByMode: {
    flashcards: 0,
    short: 0,
    exam: 0,
  },
  streakByMode: {
    flashcards: 0,
    short: 0,
    exam: 0,
  },
  bestStreakByMode: {
    flashcards: 0,
    short: 0,
    exam: 0,
  },
};

export default function TopicPage({
  params,
}: {
  params: Promise<{ slug: string; topic: string }>;
}) {
  const { slug, topic } = use(params);

  const safeTopic = topic.trim().toLowerCase();
  const data = topicsData[safeTopic];

  const [mode, setMode] = useState<Mode>("flashcards");
  const [filterMode, setFilterMode] = useState<FilterMode>("all");
  const [showAnswer, setShowAnswer] = useState(false);
  const [progress, setProgress] = useState<ProgressState>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showHippo, setShowHippo] = useState(false);

  const storageKey = `topic-progress-${safeTopic}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Partial<ProgressState>;
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
          scoreByMode: {
            flashcards: parsed.scoreByMode?.flashcards ?? 0,
            short: parsed.scoreByMode?.short ?? 0,
            exam: parsed.scoreByMode?.exam ?? 0,
          },
          streakByMode: {
            flashcards: parsed.streakByMode?.flashcards ?? 0,
            short: parsed.streakByMode?.short ?? 0,
            exam: parsed.streakByMode?.exam ?? 0,
          },
          bestStreakByMode: {
            flashcards: parsed.bestStreakByMode?.flashcards ?? 0,
            short: parsed.bestStreakByMode?.short ?? 0,
            exam: parsed.bestStreakByMode?.exam ?? 0,
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

  useEffect(() => {
    if (!showHippo) return;
    const timer = setTimeout(() => setShowHippo(false), 1800);
    return () => clearTimeout(timer);
  }, [showHippo]);

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
    return foundPosition !== -1 ? foundPosition : 0;
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

  function switchMode(newMode: Mode) {
    setMode(newMode);
    setFilterMode("all");
    setShowAnswer(false);
    setShowHippo(false);
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

    setProgress((prev) => {
      const previousStatus = prev.statusByMode[mode][currentOriginalIndex];
      const previousScore = prev.scoreByMode[mode];
      const previousStreak = prev.streakByMode[mode];
      const previousBest = prev.bestStreakByMode[mode];

      let nextScore = previousScore;
      let nextStreak = previousStreak;

      if (previousStatus !== status) {
        if (previousStatus === "correct") nextScore -= 1;
        if (status === "correct") nextScore += 1;
      }

      if (status === "correct") {
        nextStreak = previousStatus === "correct" ? previousStreak : previousStreak + 1;
      } else {
        nextStreak = 0;
      }

      const nextBest = Math.max(previousBest, nextStreak);

      if (status === "correct" && nextStreak >= 2) {
        setShowHippo(true);
      } else {
        setShowHippo(false);
      }

      return {
        ...prev,
        statusByMode: {
          ...prev.statusByMode,
          [mode]: {
            ...prev.statusByMode[mode],
            [currentOriginalIndex]: status,
          },
        },
        scoreByMode: {
          ...prev.scoreByMode,
          [mode]: Math.max(0, nextScore),
        },
        streakByMode: {
          ...prev.streakByMode,
          [mode]: nextStreak,
        },
        bestStreakByMode: {
          ...prev.bestStreakByMode,
          [mode]: nextBest,
        },
      };
    });

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

  function resetProgress() {
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
      scoreByMode: {
        ...prev.scoreByMode,
        [mode]: 0,
      },
      streakByMode: {
        ...prev.streakByMode,
        [mode]: 0,
      },
      bestStreakByMode: {
        ...prev.bestStreakByMode,
        [mode]: 0,
      },
    }));
    setFilterMode("all");
    setShowAnswer(false);
    setShowHippo(false);
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
          {safeTopic.replaceAll("-", " ")}
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

  const totalAnswered = correctCount + wrongCount;
  const accuracy =
    totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  const currentScore = progress.scoreByMode[mode];
  const currentStreak = progress.streakByMode[mode];
  const bestStreak = progress.bestStreakByMode[mode];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href={`/subject/${slug}`}
          className="inline-block mb-6 text-sm border rounded-lg px-3 py-2 hover:bg-gray-100 transition"
        >
          ← Back
        </Link>

        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-bold capitalize mb-2">
              {safeTopic.replaceAll("-", " ")}
            </h1>
            <p className="text-gray-600">Study one step at a time</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm px-4 py-3 min-w-[220px]">
            <div className="text-sm text-gray-500 mb-1">Mascot mood</div>
            <div className="flex items-center gap-3">
              <div className={`text-4xl ${showHippo ? "animate-bounce" : ""}`}>
                🦛
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  {showHippo ? "Hippo dance!" : "Ready to revise"}
                </p>
                <p className="text-sm text-gray-600">
                  {showHippo
                    ? "2 correct in a row 🎉"
                    : "Get 2 right in a row"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-4 mb-6">
          <StatCard label="Score" value={String(currentScore)} tone="yellow" />
          <StatCard label="Accuracy" value={`${accuracy}%`} tone="green" />
          <StatCard label="Streak" value={String(currentStreak)} tone="blue" />
          <StatCard label="Best streak" value={String(bestStreak)} tone="purple" />
        </div>

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
            onClick={resetProgress}
            className="rounded-xl px-4 py-3 text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50"
          >
            Reset progress
          </button>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 flex-wrap">
          <span className="capitalize font-medium">{mode}</span>
          <span>Correct: {correctCount}</span>
          <span>Wrong: {wrongCount}</span>
          <span>
            {filteredIndexes.length > 0
              ? `${currentFilteredPosition + 1} / ${filteredIndexes.length}`
              : "0 / 0"}
          </span>
        </div>

        {currentItem ? (
          <div className="rounded-3xl border border-gray-200 bg-white shadow-md p-6 md:p-8 min-h-[380px] flex flex-col justify-between">
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
                className="rounded-2xl bg-black text-white px-4 py-3 font-medium hover:opacity-90"
              >
                {showAnswer ? "Hide answer" : "Show answer"}
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => markItem("correct")}
                  className={`rounded-2xl px-4 py-3 font-medium border transition ${
                    currentStatus === "correct"
                      ? "bg-green-100 border-green-400"
                      : "bg-white border-gray-300 hover:bg-green-50"
                  }`}
                >
                  ✅ Correct
                </button>

                <button
                  onClick={() => markItem("wrong")}
                  className={`rounded-2xl px-4 py-3 font-medium border transition ${
                    currentStatus === "wrong"
                      ? "bg-red-100 border-red-400"
                      : "bg-white border-gray-300 hover:bg-red-50"
                  }`}
                >
                  ❌ Wrong
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={goPrev}
                  disabled={
                    filteredIndexes.length === 0 || currentFilteredPosition === 0
                  }
                  className="rounded-2xl border px-4 py-3 disabled:opacity-40 bg-white"
                >
                  Previous
                </button>
                <button
                  onClick={goNext}
                  disabled={
                    filteredIndexes.length === 0 ||
                    currentFilteredPosition === filteredIndexes.length - 1
                  }
                  className="rounded-2xl border px-4 py-3 disabled:opacity-40 bg-white"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <p className="text-gray-700">No items found in this filter.</p>
          </div>
        )}
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "yellow" | "green" | "blue" | "purple";
}) {
  const tones = {
    yellow: "bg-yellow-50 border-yellow-200",
    green: "bg-green-50 border-green-200",
    blue: "bg-blue-50 border-blue-200",
    purple: "bg-purple-50 border-purple-200",
  };

  return (
    <div className={`rounded-2xl border px-4 py-4 shadow-sm ${tones[tone]}`}>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
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
      className={`rounded-2xl px-4 py-3 text-sm font-medium border transition ${
        active
          ? "bg-black text-white border-black"
          : "bg-white text-black border-gray-300 hover:bg-gray-50"
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
      className={`rounded-2xl px-4 py-3 text-sm font-medium border transition ${
        active
          ? "bg-gray-900 text-white border-gray-900"
          : "bg-white text-black border-gray-300 hover:bg-gray-50"
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
      <p className="text-sm uppercase tracking-wide text-gray-500">Flashcard</p>
      <h2 className="text-3xl font-semibold leading-snug text-gray-900">
        {item.question}
      </h2>
      {showAnswer && (
        <div className="rounded-2xl bg-green-50 border border-green-200 p-5">
          <p className="text-green-900 text-xl">{item.answer}</p>
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
      <h2 className="text-3xl font-semibold leading-snug text-gray-900">
        {item.question}
      </h2>
      {showAnswer && (
        <div className="rounded-2xl bg-blue-50 border border-blue-200 p-5">
          <p className="text-blue-900 text-xl">{item.answer}</p>
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
      <h2 className="text-3xl font-semibold leading-snug text-gray-900">
        {item.question}{" "}
        <span className="text-gray-500 font-medium text-xl">
          ({item.marks} marks)
        </span>
      </h2>
      {showAnswer && (
        <div className="rounded-2xl bg-purple-50 border border-purple-200 p-5">
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