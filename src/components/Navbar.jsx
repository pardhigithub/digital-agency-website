import { useState } from "react";

export default function Navbar() {
    const [menu, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
    ]
  return (
    <nav className="relative z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="text-2xl font-extrabold tracking-tight text-slate-900">PixelCraft</a>

        <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-violet-600">{link.name}</a>
            ))}

            <a href="#contact" className="hidden rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 md:inline-flex">
                Let's talk
            </a>
        </div>

        <button type="button" onClick={()=>setMenuOpen(!menu)} aria-label={menu} aria-expanded={menu} className="rounded-lg border border-slate-200 px-3 py-2 text-slate-900 md:hidden">
            {menu? 'close' : 'menu'}
        </button>
    </div>

        {menu && (
            <div className="flex flex-col gap-4 border-t border-slate-200 bg-white px-6 py-5 md:hidden">
                {navLinks.map((link)=>(
                    <a key={link.name} href={link.href} onClick={()=>setMenuOpen(false)} className="font-medium text-slate-700 hover:text-violet-600">
                        {link.name}
                    </a>
                ))}
                <a href="#contact" onClick={()=>setMenuOpen(false)} className="rounded-full bg-violet-600 px-5 py-3 text-center font-semibold text-white">
                Let's talk
                </a>
            </div>
        )}
    </nav>
  );
}
