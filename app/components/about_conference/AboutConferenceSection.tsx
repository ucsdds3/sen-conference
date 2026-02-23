"use client";

import Image from "next/image";

export default function AboutConferenceSection() {
  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-evenly px-[10vw]">
        {/* Title */}
        <div className="flex flex-col max-w-min mx-auto my-4">
          <span className="text-7xl font-bold tracking-tight text-black leading-none min-w-max">
            Blueprint Summit 2026
          </span>
          <span className="inline-block text-lg text-black leading-snug pl-1 text-right min-w-max -mt-2">
            Hosted by the Student Entrepreneurs Network at UC San Diego
          </span>
        </div>

        <div className="grid grid-cols-16 grid-rows-16 w-full h-[80vh]">
          {/* Description */}
          <div className="row-start-4 col-start-2 row-span-5 col-span-9 border border-black bg-sen-blue rounded-2xl p-4 pt-8 z-10">
            <p className="text-lg leading-snug text-white text-right">
              A one day, in-person event, consisting of multiple workshops,
              panels, and interactive sessions, with structured networking with
              people who are actually doing the work.
            </p>
          </div>

          {/* Speaker image */}
          <div className="row-start-3 col-start-10 row-span-8 col-span-5">
            <Image
              src="/assets/about_conference_speaker.png"
              alt="Conference Speaker"
              width={500}
              height={600}
              className="object-contain"
              priority
            />
          </div>
          {/* Rady School of Management */}
          <div className="relative row-start-7 row-span-8 col-start-1 col-span-9 z-30">
            <Image
              src="/assets/about_conference_building.png"
              alt="Rady School of Management"
              width={800} // actual width of your image
              height={500} // actual height of your image
              className="block rounded-2xl"
              priority
            />

            {/* Text layered on top of image */}
            <div className="absolute ~top-4/8 top-8 ~left-4/8 left-8 text-white text-xl font-semibold z-40 max-w-sm">
              Rady School of Management
            </div>
            <div className="absolute ~top-4/8 top-8 ~right-4/8 right-8 text-white text-lg text-right z-40 min-w-max">
              10057 Scholars Dr N<br />
              La Jolla, CA
              <br />
              92093
            </div>
          </div>

          {/* Audience box */}
          <div className="row-start-8 row-span-5 col-start-9 col-span-9 border border-black bg-white rounded-2xl z-20 pl-20 flex flex-col justify-center min-w-max">
            <h3 className="text-lg font-semibold mb-2">This event is for:</h3>
            <ul className="space-y-2 text-md text-black p-4">
              <li>• Students building or planning their first startup</li>
              <li>• Early-stage founders and operators</li>
              <li>• Aspiring entrepreneurs who want real exposure</li>
              <li>• Anyone serious about learning from builders</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
