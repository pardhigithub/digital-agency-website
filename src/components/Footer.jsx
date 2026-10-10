
export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 border-b border-slate-800 pb-8 md:flex-row md:items-center">
          {/* Branding */}
          <div>
            <a
              href="#home"
              className="text-2xl font-extrabold tracking-tight"
            >
              PixelCraft<span className="text-violet-500">.</span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Creative digital solutions that help businesses
              build a stronger online presence.
            </p>
          </div>

          {/* Footer navigation */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            <a href="#home" className="hover:text-violet-400">
              Home
            </a>
            <a href="#services" className="hover:text-violet-400">
              Services
            </a>
            <a href="#portfolio" className="hover:text-violet-400">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-violet-400">
              Contact
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-3 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} PixelCraft. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
