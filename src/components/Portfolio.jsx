
const projects = [
  {
    id: 1,
    name: "ShopEase",
    category: "E-commerce",
    description:
      "A modern shopping experience with product browsing and category filters.",
    tech: ["React", "Tailwind CSS"],
    color: "from-violet-500 to-indigo-600",
    letter: "S",
  },
  {
    id: 2,
    name: "FinanceFlow",
    category: "Dashboard",
    description:
      "A clean finance dashboard concept for tracking income and expenses.",
    tech: ["React", "Charts"],
    color: "from-emerald-500 to-teal-700",
    letter: "F",
  },
  {
    id: 3,
    name: "TravelScape",
    category: "Travel",
    description:
      "A travel website concept for discovering destinations and planning trips.",
    tech: ["React", "Responsive UI"],
    color: "from-orange-400 to-rose-500",
    letter: "T",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
              Selected Work
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Ideas transformed into digital experiences.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore our concepts for creating useful, modern digital products.
            </p>
          </div>

          <span className="text-sm font-semibold text-slate-500">
            03 Featured Concepts
          </span>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Project visual */}
              <div
                className={`flex h-52 items-center justify-center bg-gradient-to-br ${project.color}`}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/30 bg-white/15 text-5xl font-extrabold text-white shadow-lg backdrop-blur-sm transition duration-300 group-hover:scale-110">
                  {project.letter}
                </div>
              </div>

              {/* Project information */}
              <div className="p-6">
                <p className="text-sm font-semibold text-violet-600">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {project.name}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
