
const services = [
  {
    id: 1,
    number: "01",
    title: "Web Development",
    description:
      "We build fast, responsive websites that help businesses grow online.",
    tags: ["React", "Responsive UI"],
  },
  {
    id: 2,
    number: "02",
    title: "UI/UX Design",
    description:
      "We design clean, intuitive interfaces that make every interaction simple.",
    tags: ["Wireframes", "Prototyping"],
  },
  {
    id: 3,
    number: "03",
    title: "Digital Marketing",
    description:
      "We help businesses improve their online presence and reach more customers.",
    tags: ["SEO", "Strategy"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
            What We Do
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Services designed around your business.
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            From the first idea to the final launch, we help turn your
            business goals into practical digital solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl"
            >
              <p className="text-sm font-bold text-violet-600">
                {service.number}
              </p>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
