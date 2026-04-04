"use client";

import Link from "next/link";

export default function AboutConferenceSection() {
  return (
    <section
      id="about-conference"
      className="relative z-10 w-full bg-white"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: copy + CTAs */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-black md:text-5xl lg:text-[3.25rem]">
                Blueprint Summit 2026
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-black/60 md:text-base">
                Hosted by the Student Entrepreneurs Network at UC San Diego
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-sen-blue p-5 md:p-6">
              <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">
                What is Blueprint Summit?
              </h3>
              <p className="max-w-prose text-sm leading-relaxed text-white/90 md:text-base">
                It&apos;s a one day, in-person event, consisting of multiple
                workshops, panels, interactive sessions, and structured
                networking. All with people who are actually doing the work.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[#fafafa] p-5 md:p-6">
              <h3 className="mb-3 text-base font-semibold text-black md:text-lg">
                If you are a...
              </h3>
              <ul className="mb-3 space-y-2 pl-1 text-sm leading-relaxed text-black/80 md:text-base">
                <li>Student building or planning their first startup</li>
                <li>Early-stage founder and/or operator</li>
                <li>Aspiring entrepreneur who want real exposure</li>
                <li>Person serious about learning from builders</li>
              </ul>
              <p className="text-base font-semibold text-black md:text-lg">
                this event is for you.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/schedule"
                className="inline-flex max-w-min cursor-pointer rounded-full bg-sen-yorange px-10 py-3 text-center text-base font-semibold whitespace-nowrap text-black transition-all duration-200 ease-out hover:scale-105 hover:opacity-95 md:text-lg"
              >
                View Schedule ↗
              </Link>
              <Link
                href="/speakers"
                className="inline-flex max-w-min cursor-pointer rounded-full bg-sen-yorange px-10 py-3 text-center text-base font-semibold whitespace-nowrap text-black transition-all duration-200 ease-out hover:scale-105 hover:opacity-95 md:text-lg"
              >
                View Speakers ↗
              </Link>
            </div>
          </div>

          {/* Right: venue visual */}
          <div
            id="venue"
            className="relative scroll-mt-24 lg:sticky lg:top-24"
          >
            <div className="relative overflow-hidden rounded-2xl border border-black/10 shadow-sm ring-1 ring-black/5">
              <img
                src="/assets/about_conference_building.png"
                alt="Rady School of Management"
                className="aspect-[4/3] w-full object-cover lg:aspect-[3/4] lg:min-h-[420px]"
              />
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white md:p-6">
                <p className="text-xs font-semibold tracking-widest text-white/90 uppercase">
                  Where it all takes place
                </p>
                <p className="mt-2 text-lg font-semibold md:text-xl">
                  Rady School of Management
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/85">
                  10057 Scholars Dr N
                  <br />
                  La Jolla, CA 92093
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
