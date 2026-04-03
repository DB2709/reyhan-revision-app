import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Reyhan Revision App
      </h1>

      <div className="grid grid-cols-2 gap-6">
        {[
          { name: "Maths", slug: "maths" },
          { name: "Biology", slug: "biology" },
          { name: "Chemistry", slug: "chemistry" },
          { name: "Physics", slug: "physics" },
          { name: "Sport Science", slug: "sport-science" },
        ].map((subject) => (
          <Link key={subject.slug} href={`/subject/${subject.slug}`}>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center text-lg font-semibold">
              {subject.name}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}