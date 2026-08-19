import { coaches } from "../data/content";
import SectionHeading from "./SectionHeading";
import useReveal from "../hooks/useReveal";

function CoachCard({ coach, index }) {
  const [ref, revealed] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translate(0,0)" : index % 2 === 0 ? "translate(-50px,26px)" : "translate(50px,26px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div
        className={`relative overflow-hidden flex items-center justify-center text-center px-5 ${
          coach.photo ? "bg-black" : "diagonal-stripes"
        }`}
        style={{
          clipPath: "polygon(8% 0,100% 0,92% 100%,0 100%)",
          height: "280px",
        }}
      >
        {coach.photo ? (
          <img
            src={coach.photo}
            alt={coach.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <span
            className="font-inter text-[#555] text-[11px] uppercase"
            style={{ fontFamily: "monospace", letterSpacing: "0.1em" }}
          >
            PHOTO  — {coach.name}
          </span>
        )}
      </div>
      <h3 className="font-anton text-xl m-0 mt-[18px] mb-1" style={{ letterSpacing: "0.02em" }}>
        {coach.name}
      </h3>
      <div
        className="text-jii-red font-inter font-bold text-xs uppercase mb-2"
        style={{ letterSpacing: "0.08em" }}
      >
        {coach.specialty}
      </div>
      <p className="font-inter text-[13px] leading-relaxed text-[#a8a8a8] m-0">{coach.bio}</p>
    </div>
  );
}

export default function Coaches() {
  return (
    <section
      id="coachs"
      className="relative bg-jii-black px-6 pt-[140px] pb-[100px] -mt-10 z-[6]"
      style={{ clipPath: "polygon(0 40px,100% 0,100% 100%,0 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading eyebrow="L'encadrement" title="COACHS" />
        <div
          className="grid gap-[30px] mt-14"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
        >
          {coaches.map((c, i) => (
            <CoachCard key={c.name} coach={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
