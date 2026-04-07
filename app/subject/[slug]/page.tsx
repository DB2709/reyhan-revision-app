"use client";

import { use } from "react";
import Link from "next/link";

export default function SubjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const topicsBySubject: Record<string, string[]> = {
    chemistry: [
      "organic-chemistry",
      "chemistry-calculations",
      "acid-salts-solubility",
      "group-1-and-7",
      "structure-and-bonding",
      "chemical-analysis",
    ],
    physics: [
      "waves"],
    maths: [],
    biology: [],
    "sport-science": [],
  };

  const topics = topicsBySubject[slug] || [];

  return (
    <main className="min-h-screen p-8 space-y-6">

      {/* 🔙 BACK BUTTON */}
      <Link
        href="/"
        className="inline-block text-sm border rounded-lg px-3 py-2 hover:bg-gray-100 transition"
      >
        ← Back to subjects
      </Link>

      {/* 🧠 TITLE */}
      <h1 className="text-3xl font-bold capitalize">
        {slug.replaceAll("-", " ")}
      </h1>

      {/* 📚 TOPICS */}
      <div className="grid gap-4">
        {topics.length === 0 ? (
          <p className="text-gray-500">No topics yet</p>
        ) : (
          topics.map((topic) => (
            <Link
              key={topic}
              href={`/subject/${slug}/${topic}`}
              className="p-4 border rounded-xl hover:bg-gray-50 transition"
            >
              {topic.replaceAll("-", " ")}
            </Link>
          ))
        )}
      </div>
    </main>
  );
}