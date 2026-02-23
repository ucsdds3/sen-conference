"use client";

import Image from "next/image";

export default function AboutConferenceSection() {
  return (
    <section className="min-h-screen w-full flex flex-col overflow-hidden h-fit bg-white -z-30">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-evenly px-[10vw] py-[10vh] gap-4">
        {/* Title */}
        <div className="flex flex-col w-min mx-auto my-4">
          <span className="text-4xl md:text-6xl font-bold tracking-tighter text-black text-center md:text-left leading-none w-[80vw] md:max-w-max">
            Blueprint Summit 2026
          </span>
          <span className="inline-block text-sm md:text-md text-black leading-snug text-balance text-center md:text-right w-[80vw] md:w-full md:-mt-2">
            Hosted by the Student Entrepreneurs Network at UC San Diego
          </span>
        </div>

        <div className="flex flex-col">
          {/* Description */}
          <div className="flex flex-col border border-black bg-sen-blue p-4 items-center w-fit rounded-2xl ml-auto -mb-[5%] z-20">
            <h3 className="text-xl font-semibold leading-snug text-white text-right text-balance w-full my-2">
              What is Blueprint Summit?
            </h3>
            <p className="inline-block text-sm md:text-md leading-snug text-white text-right text-balance max-w-[70vw] w-md">
              It's a one day, in-person event, consisting of multiple workshops,
              panels, interactive sessions, and structured networking. All with
              people who are actually doing the work.
            </p>
          </div>

          {/* Rady School of Management */}
          <div className="relative">
            <img
              src="/assets/about_conference_building.png"
              alt="Rady School of Management"
              className="object-cover h-full w-full rounded-2xl"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 md:opacity-20 z-10 rounded-2xl" />

            {/* Text layered on top of image */}
            <div className="absolute top-[5%] p-[5%] text-white tracking-tight text-xl lg:text-3xl font-bold w-fit z-20">
              WHERE IT ALL TAKES PLACE
            </div>
            <div className="absolute top-[35%] p-[5%] md:top-[5%] left-0 md:left-auto right-auto md:right-0 text-white text-md lg:text-lg text-left md:text-right min-w-max z-20">
              <span className=" text-lg lg:text-xl font-semibold">
                Rady School of Management
              </span>{" "}
              <br />
              10057 Scholars Dr N<br />
              La Jolla, CA
              <br />
              92093
            </div>
          </div>
        </div>

        {/* Audience box */}
        <div className="border border-black bg-white p-4 flex flex-col rounded-2xl max-w-md self-center shadow-sm shadow-black">
          <h3 className="text-lg font-semibold mb-2">If you are a...</h3>
          <ul className="space-y-2 text-md text-black pl-4 text-balance">
            <li>• Student building or planning their first startup</li>
            <li>• Early-stage founder and/or operator</li>
            <li>• Aspiring entrepreneur who want real exposure</li>
            <li>• Person serious about learning from builders</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2">this event is for you.</h3>
        </div>
      </div>
    </section>
  );
}
