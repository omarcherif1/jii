import useCountUp from "../hooks/useCountUp";
import { counterTargets } from "../data/content";

export default function Counters() {
  const [ref, counts] = useCountUp(counterTargets);

  const items = [
    { label: "Membres", value: counts.members, suffix: "+" },
    { label: "Coachs", value: counts.coaches, suffix: "" },
    { label: "Disciplines", value: counts.disciplines, suffix: "" },
    { label: "Années d'existence", value: counts.years, suffix: "" },
  ];

  return (
    <section
      className="relative bg-jii-black px-6 py-[100px] -mt-10 z-[8]"
      style={{ clipPath: "polygon(0 40px,100% 0,100% 100%,0 100%)" }}
    >
      <div
        ref={ref}
        className="max-w-[1100px] mx-auto grid gap-[30px] text-center"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
      >
        {items.map((c) => (
          <div key={c.label}>
            <div className="font-anton text-jii-red" style={{ fontSize: "clamp(40px,6vw,64px)" }}>
              {c.value}
              {c.suffix}
            </div>
            <div
              className="font-inter text-[13px] uppercase text-[#999] mt-1.5"
              style={{ letterSpacing: "0.1em" }}
            >
              {c.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
