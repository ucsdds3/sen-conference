"use client";

const quotes = [
  // Top-left: inset from edge, row 2
  {
    text: "SEN completely changed how I approach building. The speakers didn't sugarcoat anything — the most honest, practical advice I've gotten as a student founder.",
    col: "col-start-2 col-end-6",
    row: "row-start-2",
    style: { alignSelf: "end", paddingBottom: "clamp(0.5rem, 1vw, 1.25rem)" },
  },
  // Top-center: centered in the gap between left (col 2-6) and right (col 8-12)
  {
    text: "I came in skeptical and walked out with a co-founder I'd been looking for months. The networking alone made the ticket price feel laughably cheap.",
    col: "col-start-5 col-end-9",
    row: "row-start-1",
    style: { alignSelf: "end", paddingBottom: "clamp(0.5rem, 1vw, 1.25rem)" },
  },
  // Top-right: inset from right edge, row 2
  {
    text: "Finally an event with zero fluff. Real founders, real mistakes, real frameworks. I left with pages of notes I actually used the next week.",
    col: "col-start-8 col-end-12",
    row: "row-start-2",
    style: { alignSelf: "end", paddingBottom: "clamp(0.5rem, 1vw, 1.25rem)" },
  },
  // Bottom-left: inset from edge
  {
    text: "The panels were unlike anything I'd seen on campus. Every speaker had been in the trenches — I filled an entire notebook and still felt like I missed things.",
    col: "col-start-2 col-end-6",
    row: "row-start-4",
    style: { alignSelf: "start", paddingTop: "clamp(0.5rem, 1vw, 1.25rem)" },
  },
  // Bottom-center: drops to row 5
  {
    text: "If you have even a seed of a startup idea, you need to be in that room. The energy, the people, the conversations — it accelerated my thinking by months.",
    col: "col-start-5 col-end-9",
    row: "row-start-5",
    style: { alignSelf: "start", paddingTop: "clamp(0.5rem, 1vw, 1.25rem)" },
  },
  // Bottom-right: inset from edge, offset down
  {
    text: "I wasn't even planning to network but ended up in a 45-minute conversation that turned into my first investor intro. That connection changed the trajectory of my project.",
    col: "col-start-8 col-end-12",
    row: "row-start-4",
    style: { alignSelf: "start", paddingTop: "clamp(1.5rem, 3vw, 4rem)" },
  },
];

export default function SocialProof() {
  return (
    <section className="bg-white ~px-6/16" style={{ height: "100svh" }}>
      <div
        className="w-full h-full grid grid-cols-12 gap-x-8"
        style={{ gridTemplateRows: "1fr 1fr auto 1fr 1fr" }}
      >
        {quotes.map((q, i) => (
          <p
            key={i}
            className={`${q.col} ${q.row} text-center font-light leading-snug text-[#0D1626]/70 tracking-tight`}
            style={{ fontSize: "clamp(0.75rem, 1.3vw, 1.5rem)", ...q.style }}
          >
            &ldquo;{q.text}&rdquo;
          </p>
        ))}

        <h2
          className="col-start-1 col-end-13 row-start-3 font-black tracking-tighter text-[#0D1626] leading-none text-center"
          style={{ fontSize: "clamp(2.5rem, 7vw, 9rem)" }}
        >
          500+ students engaged
        </h2>
      </div>
    </section>
  );
}