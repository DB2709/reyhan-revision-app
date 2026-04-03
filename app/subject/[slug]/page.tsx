"use client";

import { use } from "react";
import Link from "next/link";

export default function SubjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const topics = [
    "organic-chemistry",
    "chemistry-calculations",
    "acid-salts-solubility",
    "group-1-and-7",
    "structure-and-bonding",
    "chemical-analysis",
  ];

  return (
    <main className="min-h-screen p-8 space-y-6">
      <h1 className="text-3xl font-bold capitalize">
        {slug.replaceAll("-", " ")}
      </h1>

      <div className="grid gap-4">
        {topics.map((topic) => (
          <Link
            key={topic}
            href={`/subject/${slug}/${topic}`}
            className="p-4 border rounded-xl hover:bg-gray-50"
          >
            {topic.replaceAll("-", " ")}
          </Link>
        ))}
      </div>
    </main>
  );
}