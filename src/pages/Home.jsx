// src/pages/Home.jsx

function Home() {
  return (
    <main id="home" className="overflow-hidden bg-white">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        {/* Left content */}
        <div>
          <span className="inline-block rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            Creative Digital Agency
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            We Build
            <span className="block text-violet-600">
              Digital Experiences
            </span>
            That Matter.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
            We help businesses grow with beautiful websites, thoughtful design,
            and digital solutions that turn ideas into reality.
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-violet-600 px-7 py-3.5 font-semibold text-white transition hover:bg-violet-700"
            >
              Start a Project
            </a>

            <a
              href="#portfolio"
              className="rounded-full border border-slate-300 px-7 py-3.5 font-semibold text-slate-800 transition hover:border-violet-600 hover:text-violet-600"
            >
              View Our Work →
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-500">
            <span>✓ Responsive Design</span>
            <span>✓ Modern Technology</span>
            <span>✓ User-Focused</span>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-violet-200 blur-3xl" />
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-indigo-200 blur-3xl" />

          <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-2xl shadow-violet-100 sm:p-8">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-sm text-slate-500">
                pixelcraft.design
              </span>
            </div>

            <div className="py-8 sm:py-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
                Design. Develop. Deliver.
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Your next big idea starts here.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Digital solutions designed around your business goals.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-violet-600 p-5 text-white">
                  <p className="text-2xl font-bold">01</p>
                  <p className="mt-2 text-sm">Creative Design</p>
                </div>

                <div className="rounded-2xl bg-slate-900 p-5 text-white">
                  <p className="text-2xl font-bold">02</p>
                  <p className="mt-2 text-sm">Smart Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;