import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-jii-black"
    >
      <img
        src={heroImg}
        alt="Équipe JII Athletics"
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 animate-hero-fade"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.9) 100%)",
        }}
      />
      <div className="relative z-[2] flex flex-col items-center gap-7 px-5 animate-hero-text">
        <div className="flex flex-col gap-1.5">
          <div
            className="font-anton text-white -skew-x-[8deg]"
            style={{ fontSize: "clamp(26px,5vw,44px)", letterSpacing: "0.05em" }}
          >
            UNITY IN STRUGGLE
          </div>
          <div
            dir="rtl"
            className="font-arabic font-bold text-jii-red"
            style={{ fontSize: "clamp(20px,4vw,30px)" }}
          >
            الوحدة في النضال
          </div>
        </div>
        <a
          href="#planning"
          className="mt-2.5 !text-white bg-jii-red font-anton -skew-x-[8deg] inline-block px-9 py-[18px]"
          style={{ fontSize: "clamp(15px,2vw,18px)", letterSpacing: "0.04em" }}
        >
          REJOINS L'ÉQUIPE
        </a>
      </div>
    </section>
  );
}
