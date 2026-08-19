import { useState } from "react";
import { disciplines, disciplineSchedules } from "../data/content";
import SectionHeading from "./SectionHeading";

const CATEGORY_STYLES = {
  KIDS: { background: "#D42D2D", color: "#fff" },
  "RX ADVANCED": { background: "#C23B22", color: "#fff" },
  ADULTS: { background: "#3A1414", color: "#fff" },
  TEENS: { background: "#F0C4BA", color: "#3A1414" },
  "BJJ OPEN MAT": { background: "#F5F2EA", color: "#D42D2D" },
  "BJJ COMP CLASS": { background: "#D42D2D", color: "#fff" },
  "BJJ NOGI": { background: "#3A1414", color: "#fff" },
  "BJJ GI": { background: "#C23B22", color: "#fff" },
  "FIGHT TEAM": { background: "#2A2A2A", color: "#fff" },
  "MMA BEGINNER": { background: "#3A1414", color: "#fff" },
  WRESTLING: { background: "#3A1414", color: "#fff" },
  "BARBELL CLUB": { background: "#D42D2D", color: "#fff" },
};

const NOTE_STYLES = {
  "NO GI": { background: "#3A1414", color: "#fff" },
  GI: { background: "#C23B22", color: "#fff" },
  "GI / NO GI": { background: "#D42D2D", color: "#fff" },
};

function getSessionStyle(session) {
  if (session.note && NOTE_STYLES[session.note]) return NOTE_STYLES[session.note];
  return CATEGORY_STYLES[session.category] || { background: "#1c1c1c", color: "#fff" };
}

function SessionBlock({ session }) {
  if (session.category === "CLOSED") {
    return (
      <div className="flex-1 flex items-center justify-center text-center px-1.5 py-1">
        <span className="font-anton text-xs text-[#666] uppercase" style={{ letterSpacing: "0.05em" }}>
          CLOSED
        </span>
      </div>
    );
  }

  const style = getSessionStyle(session);
  return (
    <div
      className="relative flex-1 flex flex-col items-center justify-center text-center px-1.5 py-1 cursor-default transition-all duration-200 ease-out hover:z-10 hover:scale-[1.06] hover:shadow-[0_6px_18px_rgba(0,0,0,0.5)] hover:brightness-110"
      style={{ background: style.background, color: style.color }}
    >
      <div className="font-anton text-[10px] leading-tight" style={{ letterSpacing: "0.02em" }}>
        {session.category}
      </div>
      {session.age && <div className="font-inter text-[9px] opacity-90 mt-0.5">{session.age}</div>}
      {session.range && <div className="font-inter text-[9px] mt-0.5">{session.range}</div>}
      {session.note && (
        <div className="font-anton text-[10px] mt-0.5" style={{ letterSpacing: "0.02em" }}>
          {session.note}
        </div>
      )}
      {session.instructor && (
        <div className="font-inter text-[8px] mt-0.5 opacity-80 leading-tight">
          Instructed by {session.instructor}
        </div>
      )}
    </div>
  );
}

function OpenGymNote({ openGym }) {
  return (
    <div className="text-right">
      <div
        className="font-inter font-bold text-white text-xs uppercase mb-1.5"
        style={{ letterSpacing: "0.08em" }}
      >
        {openGym.label}
      </div>
      {openGym.lines.map((l) => (
        <div key={l.days} className="font-inter text-[11px] text-[#999]">
          <span className="text-white font-semibold">{l.hours}</span> — {l.days}
        </div>
      ))}
    </div>
  );
}

function DisciplineTable({ schedule }) {
  const { days, closedDays = [], timeSlots, sessions } = schedule;

  return (
    <div>
      <div className="overflow-x-auto">
        <div
          className="grid gap-0.5"
          style={{
            gridTemplateColumns: `90px repeat(${days.length}, minmax(110px, 1fr))`,
            minWidth: `${90 + days.length * 110}px`,
          }}
        >
          <div className="bg-[#0e0e0e]" style={{ gridColumn: 1, gridRow: 1 }} />
          {days.map((day, di) => (
            <div
              key={day}
              className="bg-jii-red text-white font-anton text-[13px] text-center py-3 px-1.5 uppercase"
              style={{ letterSpacing: "0.03em", gridColumn: di + 2, gridRow: 1 }}
            >
              {day}
            </div>
          ))}

          {timeSlots.map((slot, ti) => (
            <div
              key={slot}
              className="bg-[#0e0e0e] text-[#999] font-anton text-[13px] flex items-center justify-center px-1 py-2.5"
              style={{ gridColumn: 1, gridRow: ti + 2 }}
            >
              {slot}
            </div>
          ))}

          {days.map((day, di) => {
            if (closedDays.includes(day)) {
              return (
                <div
                  key={day}
                  className="bg-jii-black flex items-center justify-center text-center px-2"
                  style={{ gridColumn: di + 2, gridRow: `2 / span ${timeSlots.length}` }}
                >
                  <span
                    className="font-anton text-sm text-[#666] uppercase"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    CLOSED
                  </span>
                </div>
              );
            }

            const dayCells = [];
            let ti = 0;
            while (ti < timeSlots.length) {
              const slot = timeSlots[ti];
              const cellSessions = sessions.filter((s) => s.day === day && s.slot === slot);
              const span = cellSessions.reduce((max, s) => Math.max(max, s.rowSpan || 1), 1);
              dayCells.push(
                <div
                  key={`${day}-${slot}`}
                  className={
                    cellSessions.length
                      ? "flex flex-col"
                      : "flex flex-col transition-colors duration-200 hover:bg-[#1a1a1a]"
                  }
                  style={{
                    gridColumn: di + 2,
                    gridRow: `${ti + 2} / span ${span}`,
                    background: cellSessions.length ? "transparent" : "#0e0e0e",
                    minHeight: cellSessions.length ? "70px" : "44px",
                  }}
                >
                  {cellSessions.map((s, si) => (
                    <SessionBlock key={si} session={s} />
                  ))}
                </div>
              );
              ti += span;
            }
            return dayCells;
          })}
        </div>
      </div>
    </div>
  );
}

export default function Planning() {
  const [active, setActive] = useState(
    disciplines.find((d) => disciplineSchedules[d.id])?.id ?? disciplines[0].id
  );

  const activeDiscipline = disciplines.find((d) => d.id === active);
  const schedule = disciplineSchedules[active];

  return (
    <section
      id="planning"
      className="relative bg-jii-dark px-6 pt-[140px] pb-[100px] -mt-10 z-[5]"
      style={{ clipPath: "polygon(0 0,100% 40px,100% 100%,0 100%)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading eyebrow="Cours de la semaine" title="PLANNING" />

        <div className="flex gap-2.5 flex-wrap mt-10">
          {disciplines.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setActive(d.id)}
              className="px-[18px] py-2.5 font-inter font-semibold text-[13px] uppercase cursor-pointer"
              style={{
                letterSpacing: "0.04em",
                background: active === d.id ? "#D42D2D" : "transparent",
                color: "#fff",
                border: active === d.id ? "none" : "1px solid #444",
              }}
            >
              {d.name}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h3 className="font-anton text-2xl -skew-x-[8deg] origin-left m-0" style={{ letterSpacing: "0.02em" }}>
              {activeDiscipline?.name.toUpperCase()}
            </h3>
            {schedule?.openGym && <OpenGymNote openGym={schedule.openGym} />}
          </div>

          {schedule ? (
            <DisciplineTable schedule={schedule} />
          ) : (
            <div className="bg-[#181818] px-8 py-14 text-center">
              <p className="font-anton text-lg text-[#999]">PLANNING BIENTÔT DISPONIBLE</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
