import { testimonials } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Testimonials() {
  const [ref, revealed] = useReveal();

  return (
    <section
      className="relative bg-jii-black px-6 pt-[140px] pb-[100px] -mt-10 z-10"
      style={{ clipPath: "polygon(0 40px,100% 0,100% 100%,0 100%)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div
          ref={ref}
          className="text-center"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translate(0,0)" : "translate(-50px,26px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <h2
            className="font-anton -skew-x-[8deg] m-0"
            style={{ fontSize: "clamp(28px,4.5vw,48px)", letterSpacing: "0.02em" }}
          >
            CE QU'ILS EN DISENT
          </h2>
        </div>
        <div
          className="grid gap-[26px] mt-[50px]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#161616] px-[26px] py-[30px]" style={{ borderTop: "3px solid #D42D2D" }}>
              <p className="font-inter text-[15px] leading-relaxed text-[#e5e5e5] m-0 mb-4">
                « {t.quote} »
              </p>
              <div className="font-anton text-sm text-jii-red" style={{ letterSpacing: "0.03em" }}>
                {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
