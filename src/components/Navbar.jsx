import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [compact, setCompact] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 860
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 60);
    const onResize = () => setIsMobile(window.innerWidth <= 860);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between backdrop-blur-md transition-[padding,background] duration-300"
        style={{
          padding: compact ? "6px 24px" : "10px 24px",
          background: compact ? "rgba(10,10,10,0.92)" : "rgba(10,10,10,0.35)",
          borderBottom: compact ? "1px solid #222" : "none",
        }}
      >
        <div className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="JII Athletics"
            className="w-auto block transition-[height] duration-300"
            style={{ height: compact ? "38px" : "52px" }}
          />
        </div>

        {isMobile ? (
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="w-[42px] h-[42px] border-none text-white text-xl bg-transparent cursor-pointer"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        ) : (
          <div className="flex gap-7 font-inter font-semibold text-sm tracking-[0.06em] uppercase">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="!text-white hover:!text-jii-red">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-jii-black z-[999] flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-anton text-3xl tracking-[0.04em] ${
                link.href === "#contact" ? "!text-jii-red" : "!text-white"
              }`}
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
