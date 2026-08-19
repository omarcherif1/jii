import logo from "../assets/logo.png";
import { navLinks } from "../data/content";

export default function Footer() {
  const footerLinks = navLinks.filter((l) => l.href !== "#galerie");

  return (
    <footer className="relative bg-jii-black px-6 pt-[60px] pb-[30px] border-t border-[#222] z-[12]">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-[30px]">
        <div className="flex items-center gap-5 -mt-7">
          <img src={logo} alt="JII Athletics" className="h-[90px] w-auto max-w-[160px] object-contain" />
        </div>
        <div className="flex gap-[26px] flex-wrap font-inter text-[13px] font-semibold uppercase" style={{ letterSpacing: "0.05em" }}>
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="!text-[#ccc]">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-9 font-inter text-xs text-[#555]">
        © 2026 JII Athletics — Tous droits réservés.
      </div>
    </footer>
  );
}
