import { pricing } from "../data/content";
import SectionHeading from "./SectionHeading";
import useReveal from "../hooks/useReveal";

function PriceCard({ plan, index }) {
  const [ref, revealed] = useReveal();
  const dir = index === 0 ? "translate(-50px,26px)" : index === 2 ? "translate(50px,26px)" : "translate(-50px,26px)";

  return (
    <div
      ref={ref}
      className="text-center px-[34px]"
      style={{
        opacity: revealed ? 1 : 0,
        transform: (plan.highlight ? "scale(1.04) " : "") + (revealed ? "translate(0,0)" : dir),
        transition: "opacity 0.7s ease, transform 0.7s ease",
        background: plan.highlight ? "#1c1010" : "#181818",
        border: plan.highlight ? "2px solid #D42D2D" : "1px solid #2a2a2a",
        paddingTop: plan.highlight ? "48px" : "38px",
        paddingBottom: plan.highlight ? "48px" : "38px",
      }}
    >
      <div className="font-anton text-xl" style={{ letterSpacing: "0.03em" }}>
        {plan.name}
      </div>
      <div className="my-5">
        <span className="font-anton text-[44px]">{plan.price}</span>
      </div>
      {plan.studentLine && (
        <div className="font-inter text-[13px] text-[#999]" style={{ margin: "-14px 0 18px" }}>
          {plan.studentLine}
        </div>
      )}
      <div className="flex flex-col gap-2.5 mb-[26px]">
        {plan.features.map((feat) => (
          <div key={feat} className="font-inter text-sm text-[#ddd] flex gap-2">
            <span className="text-jii-red">—</span>
            {feat}
          </div>
        ))}
      </div>
      <a
        href="#contact"
        className="block w-full !text-white font-anton text-[15px] py-3.5 -skew-x-[8deg]"
        style={{
          letterSpacing: "0.03em",
          background: plan.highlight ? "#D42D2D" : "transparent",
          border: plan.highlight ? "none" : "1px solid #555",
        }}
      >
        {plan.ctaLabel}
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section
      id="tarifs"
      className="relative bg-jii-dark px-6 pt-[140px] pb-[100px] -mt-10 z-[7]"
      style={{ clipPath: "polygon(0 0,100% 40px,100% 100%,0 100%)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading eyebrow="Formules" title="TARIFS" center />
        <div
          className="grid gap-7 mt-14 items-center"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          {pricing.map((p, i) => (
            <PriceCard key={p.name} plan={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
