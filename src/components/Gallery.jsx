import { galleryItems } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  return (
    <section
      id="galerie"
      className="relative bg-jii-dark px-6 pt-[140px] pb-[100px] -mt-10 z-[9]"
      style={{ clipPath: "polygon(0 0,100% 40px,100% 100%,0 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading eyebrow="La salle en action" title="GALERIE" />
        <div
          className="grid gap-3.5 mt-14"
          style={{ gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "140px" }}
        >
          {galleryItems.map((g) => (
            <div
              key={g.label}
              className="group relative overflow-hidden"
              style={{ gridColumn: `span ${g.colSpan}`, gridRow: `span ${g.rowSpan}` }}
            >
              <img
                src={g.img}
                alt={g.label}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 md:grayscale md:contrast-125 md:group-hover:grayscale-0 md:group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex items-end p-3"
                style={{
                  background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.85) 100%)",
                }}
              >
                <span
                  className="font-anton text-white text-xs uppercase"
                  style={{ letterSpacing: "0.05em" }}
                >
                  {g.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
