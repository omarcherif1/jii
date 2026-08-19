import { useState } from "react";
import useReveal from "../hooks/useReveal";

export default function DisciplineCard({ discipline, index }) {
  const [ref, revealed] = useReveal();
  const [hovered, setHovered] = useState(false);

  const style = hovered
    ? {
        clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
        background: "#1a1010",
        boxShadow: "inset 4px 0 0 #D42D2D",
        opacity: 1,
        transform: "translateX(0)",
      }
    : {
        clipPath: "polygon(6% 0,100% 0,94% 100%,0% 100%)",
        background: "#141414",
        opacity: revealed ? 1 : 0,
        transform: revealed
          ? "translateX(0)"
          : index % 2 === 0
          ? "translateX(-40px)"
          : "translateX(40px)",
      };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="px-[30px] py-8"
      style={{
        ...style,
        transition:
          "opacity 0.6s ease, transform 0.6s ease, clip-path 0.4s ease, background 0.4s ease",
      }}
    >
      <div className="w-[52px] h-[52px] bg-jii-red text-white flex items-center justify-center font-anton text-2xl mb-5">
        {discipline.icon}
      </div>
      <h3 className="font-anton text-[22px] m-0 mb-2.5" style={{ letterSpacing: "0.02em" }}>
        {discipline.name}
      </h3>
      <p className="font-inter text-sm leading-relaxed text-[#b8b8b8] m-0">
        {discipline.desc}
      </p>
    </div>
  );
}
