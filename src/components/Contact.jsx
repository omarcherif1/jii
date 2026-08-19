import SectionHeading from "./SectionHeading";

const infoRows = [
  { icon: "A", label: "Adresse", value: "115 Av. de l'UMA, La Soukra 2036, Tunis" },
  {
    icon: "T",
    label: "Téléphone",
    value: (
      <a href="tel:+216XXXXXXXX" className="!text-white hover:!text-jii-red">
        +216 XX XXX XXX
      </a>
    ),
  },
  {
    icon: "H",
    label: "Horaires",
    value: (
      <>
        Lun – Ven : 7h – 21h
        <br />
        Sam : 9h – 14h
        <br />
        Dim : fermé
      </>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-jii-dark px-6 pt-[140px] pb-[100px] -mt-10 z-[11]"
      style={{ clipPath: "polygon(0 0,100% 40px,100% 100%,0 100%)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading eyebrow="Viens t'entraîner" title="CONTACT" center />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-[50px] items-stretch">
          <iframe
            title="JII Athletics — localisation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.8505898490657!2d10.22669237549211!3d36.869994972227346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb55ec024d0b%3A0xf58d8d1e5a63176a!2sJII%20Athletics!5e0!3m2!1sfr!2stn!4v1786311208846!5m2!1sfr!2stn"
            className="w-full h-[280px] md:h-full"
            style={{ border: 0, minHeight: "280px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />

          <div className="bg-[#181818] p-6 md:p-9 flex flex-col gap-7">
            <div className="flex flex-col gap-6">
              {infoRows.map((row) => (
                <div key={row.label} className="flex gap-4 items-start">
                  <div className="w-[46px] h-[46px] shrink-0 bg-jii-red text-white flex items-center justify-center font-anton text-lg">
                    {row.icon}
                  </div>
                  <div className="text-left">
                    <div
                      className="text-jii-red font-inter font-bold uppercase text-[11px] mb-1"
                      style={{ letterSpacing: "0.1em" }}
                    >
                      {row.label}
                    </div>
                    <div className="font-inter text-[15px] leading-relaxed text-[#ddd]">
                      {row.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6 border-t border-[#2a2a2a]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="!text-white hover:!text-jii-red font-inter font-semibold text-sm uppercase"
                style={{ letterSpacing: "0.04em" }}
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="!text-white hover:!text-jii-red font-inter font-semibold text-sm uppercase"
                style={{ letterSpacing: "0.04em" }}
              >
                Facebook
              </a>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}
