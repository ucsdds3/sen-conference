'use client'

const quotes = [
  "SEN completely changed how I approach building. The speakers didn't sugarcoat anything - the most honest, practical advice I've gotten as a student founder.",
  "I came in skeptical and walked out with a co-founder I'd been looking for months. The networking alone made the ticket price feel laughably cheap.",
  "Finally an event with zero fluff. Real founders, real mistakes, real frameworks. I left with pages of notes I actually used the next week.",
  "The panels were unlike anything I'd seen on campus. Every speaker had been in the trenches - I filled an entire notebook and still felt like I missed things.",
  "If you have even a seed of a startup idea, you need to be in that room. The energy, the people, the conversations - it accelerated my thinking by months.",
  "I wasn't even planning to network but ended up in a 45-minute conversation that turned into my first investor intro. That connection changed the trajectory of my project.",
];

const topCarouselQuotes = [...quotes, ...quotes];
const bottomCarouselQuotes = [...quotes.slice(2), ...quotes.slice(0, 2), ...quotes.slice(2), ...quotes.slice(0, 2)];
const reviewers = [
  { name: "Maya Chen", initial: "M", avatarColor: "bg-blue-500" },
  { name: "Jordan Patel", initial: "J", avatarColor: "bg-emerald-500" },
  { name: "Ethan Kim", initial: "E", avatarColor: "bg-purple-500" },
  { name: "Sofia Nguyen", initial: "S", avatarColor: "bg-rose-500" },
  { name: "Noah Rivera", initial: "N", avatarColor: "bg-amber-500" },
  { name: "Ava Thompson", initial: "A", avatarColor: "bg-cyan-500" },
];

type CarouselRowProps = {
  items: string[];
  reverse?: boolean;
  durationSeconds?: number;
};

function CarouselRow({
  items,
  reverse = false,
  durationSeconds = 36,
}: CarouselRowProps) {
  return (
    <div className="group relative w-full overflow-hidden">
      <div
        className={`flex w-max gap-4 md:gap-6 will-change-transform ${reverse ? "animate-social-proof-marquee-reverse" : "animate-social-proof-marquee"}`}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {items.map((quote, index) => {
          const reviewer = reviewers[index % reviewers.length];
          return (
            <article
              key={`${quote.slice(0, 16)}-${index}`}
              className="relative w-[18rem] sm:w-[22rem] md:w-[30rem] shrink-0 rounded-2xl border border-black/10 bg-sen-card px-4 py-4 md:px-6 md:py-5"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full text-white font-semibold text-sm md:text-base ${reviewer.avatarColor}`}
                >
                  {reviewer.initial}
                </div>
                <p className="font-semibold text-sm md:text-base text-black/80">{reviewer.name}</p>
              </div>

              <div className="mt-3 flex items-center gap-0.5 text-sen-yorange" aria-label="5 out of 5 stars">
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
              </div>

              <p className="mt-3 text-sm md:text-base leading-relaxed text-black/80">
                &ldquo;{quote}&rdquo;
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="relative min-h-[100svh] bg-white overflow-hidden px-3 sm:px-4 md:px-8 lg:px-12 py-10 md:py-16">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-20" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-[120rem] flex-col items-center justify-center gap-8 md:gap-12">
        <CarouselRow items={topCarouselQuotes} durationSeconds={40} />

        <div className="mx-auto max-w-4xl text-center px-4">
          <h2 className="mt-3 font-black tracking-tighter text-sen-blue leading-[0.95] text-[clamp(2.35rem,10vw,7rem)]">
            500+ Students
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-lg text-sen-blue/65 leading-relaxed max-w-2xl mx-auto">
            Builders, founders, and operators who left with practical insights and meaningful connections.
          </p>
        </div>

        <CarouselRow items={bottomCarouselQuotes} reverse durationSeconds={44} />
      </div>
    </section>
  );
}