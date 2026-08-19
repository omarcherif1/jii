import { disciplines } from "../data/content";
import SectionHeading from "./SectionHeading";
import DisciplineCard from "./DisciplineCard";

export default function Disciplines() {
  return (
    <section
      id="disciplines"
      className="relative bg-jii-black px-6 pt-[140px] pb-[100px] -mt-10 z-[4]"
      style={{ clipPath: "polygon(0 40px,100% 0,100% 100%,0 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading eyebrow="Ce qu'on enseigne" title="DISCIPLINES" />
        <div
          className="grid gap-7 mt-14"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {disciplines.map((d, i) => (
            <DisciplineCard key={d.id} discipline={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
