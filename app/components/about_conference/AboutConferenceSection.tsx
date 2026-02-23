"use client";

import Image from "next/image";

export default function AboutConferenceSection() {
  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden px-fluid-6">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">

        {/* Title */}
        <div className="mb-4">
          <h2 className="text-7xl font-bold tracking-tight text-black leading-tight">
            Blueprint Summit 2026
          </h2>
          <p className="text-xl text-black/70 pl-4 md:pl-6 lg:pl-8 leading-snug">
            Hosted by the Student Entrepreneurs Network at UC San Diego
          </p>
        </div>

        {/* Top Row: Description + Speaker */}
        <div className="flex md:flex-row flex-col h-[35vh] w-full items-end gap-4">

          {/* Description box */}
          <div className="bg-[#071B34] text-white rounded-2xl md:rounded-r-none p-4 md:pl-8 flex items-center md:w-1/2 h-[24vh]">
            <p className="text-xl leading-snug">
              A one day, in-person event, consisting of multiple workshops,
              panels, and interactive sessions, with structured networking with
              people who are actually doing the work.
            </p>
          </div>

          {/* Speaker image */}
          <div className="relative md:w-1/2 h-[24vh] rounded-2xl overflow-hidden flex justify-center items-end">
            <Image
              src="/assets/about_conference_speaker.png"
              alt="Conference Speaker"
              width={500}
              height={600}
              className="object-contain"
              priority
            />
          </div>

        </div>

        {/* Bottom Row: Building + Audience */}
        <div className="flex md:flex-row flex-col w-full mt-2 gap-4">

          {/* Building image slightly scaled down */}
          <div className="relative md:w-auto h-auto rounded-2xl overflow-visible scale-90">
            <Image
              src="/assets/about_conference_building.png"
              alt="Rady School of Management"
              width={800}   // actual width of your image
              height={500}  // actual height of your image
              className="block"
              priority
            />

            {/* Text layered on top of image */}
            <div className="absolute top-4 left-4 text-white text-lg font-semibold">
              Rady School of Management
            </div>
            <div className="absolute top-4 right-4 text-white text-lg text-right">
              10057 Scholars Dr N<br/>
              La Jolla, CA<br/>
              92093
            </div>
          </div>

          {/* Audience box */}
          <div className="border border-black/30 rounded-2xl p-4 md:pl-8 flex flex-col justify-center md:w-2/5 h-auto">
            <h3 className="text-xl font-semibold mb-2">This event is for:</h3>
            <ul className="space-y-2 text-lg text-black/80">
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