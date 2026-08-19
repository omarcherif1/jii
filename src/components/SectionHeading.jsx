import useReveal from "../hooks/useReveal";

export default function SectionHeading({ eyebrow, title, center = false }) {
  const [ref, revealed] = useReveal();

  return (
    <div
      ref={ref}
      className={center ? "text-center" : ""}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translate(0,0)" : "translate(-50px,26px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div
        className="text-jii-red font-inter font-bold uppercase text-[13px] mb-2.5"
        style={{ letterSpacing: "0.15em" }}
      >
        {eyebrow}
      </div>
      <h2
        className={`font-anton -skew-x-[8deg] m-0 ${center ? "" : "origin-left"}`}
        style={{ fontSize: "clamp(32px,5vw,56px)", letterSpacing: "0.02em" }}
      >
        {title}
      </h2>
    </div>
  );
}
