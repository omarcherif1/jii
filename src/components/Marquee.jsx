import { disciplines } from "../data/content";

const items = [...disciplines, ...disciplines];

export default function Marquee() {
  return (
    <div
      className="bg-jii-red py-4 overflow-hidden relative z-[3]"
      style={{ transform: "skewY(-1.5deg)", margin: "-70px 0 -10px" }}
    >
      <div className="flex w-max animate-marquee">
        {items.map((d, i) => (
          <span
            key={`${d.id}-${i}`}
            className="font-anton text-xl text-jii-black whitespace-nowrap px-[22px]"
            style={{ letterSpacing: "0.05em" }}
          >
            {d.name} <span className="opacity-50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
