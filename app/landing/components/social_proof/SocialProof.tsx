const quotes = [
  {
    text: "SEN completely changed how I approach building. The speakers didn't sugarcoat anything — the most honest, practical advice I've gotten as a student founder.",
    col: "col-start-2 col-end-6",
    row: "row-start-2",
    style: { alignSelf: "end", paddingBottom: "clamp(0.5rem, 1vw, 1.25rem)" },
  },
  {
    text: "I came in skeptical and walked out with a co-founder I'd been looking for months. The networking alone made the ticket price feel laughably cheap.",
    col: "col-start-5 col-end-9",
    row: "row-start-1",
    style: { alignSelf: "end", paddingBottom: "clamp(0.5rem, 1vw, 1.25rem)" },
  },
  {
    text: "Finally an event with zero fluff. Real founders, real mistakes, real frameworks. I left with pages of notes I actually used the next week.",
    col: "col-start-8 col-end-12",
    row: "row-start-2",
    style: { alignSelf: "end", paddingBottom: "clamp(0.5rem, 1vw, 1.25rem)" },
  },
  {
    text: "The panels were unlike anything I'd seen on campus. Every speaker had been in the trenches — I filled an entire notebook and still felt like I missed things.",
    col: "col-start-2 col-end-6",
    row: "row-start-4",
    style: { alignSelf: "start", paddingTop: "clamp(0.5rem, 1vw, 1.25rem)" },
  },
  {
    text: "If you have even a seed of a startup idea, you need to be in that room. The energy, the people, the conversations — it accelerated my thinking by months.",
    col: "col-start-5 col-end-9",
    row: "row-start-5",
    style: { alignSelf: "start", paddingTop: "clamp(0.5rem, 1vw, 1.25rem)" },
  },
  {
    text: "I wasn't even planning to network but ended up in a 45-minute conversation that turned into my first investor intro. That connection changed the trajectory of my project.",
    col: "col-start-8 col-end-12",
    row: "row-start-4",
    style: { alignSelf: "start", paddingTop: "clamp(1.5rem, 3vw, 4rem)" },
  },
];

export default function SocialProof() {
  return (
    <section className="bg-white px-6 md:px-16" style={{ height: "100svh" }}>
      {/* Mobile layout */}
      <div className="flex flex-col justify-center items-center gap-6 h-full md:hidden py-12 px-6">
        <h2 className="font-black tracking-tighter text-sen-blue text-center text-5xl leading-none">
          500+ students engaged
        </h2>
        {quotes.map((q, i) => (
          <p key={i} className="text-center text-sm font-light text-sen-blue/70 leading-snug max-w-sm">
            &ldquo;{q.text}&rdquo;
          </p>
        ))}
      </div>

      {/* Desktop word-cloud grid */}
      <div
        className="hidden md:grid w-full h-full grid-cols-12 gap-x-8"
        style={{ gridTemplateRows: "1fr 1fr auto 1fr 1fr" }}
      >
        {quotes.map((q, i) => (
          <p
            key={i}
            className={`${q.col} ${q.row} text-center font-light leading-snug text-sen-blue/70 tracking-tight`}
            style={{ fontSize: "clamp(0.75rem, 1.3vw, 1.5rem)", ...q.style }}
          >
            &ldquo;{q.text}&rdquo;
          </p>
        ))}
        <h2
          className="col-start-1 col-end-13 row-start-3 font-black tracking-tighter text-sen-blue leading-none text-center"
          style={{ fontSize: "clamp(2.5rem, 7vw, 9rem)" }}
        >
          500+ students engaged
        </h2>
      </div>
    </section>
  );
}