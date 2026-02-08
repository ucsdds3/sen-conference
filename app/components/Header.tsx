'use client'

import RegisterButton from './RegisterButton';

export default function Header() {
  return (
    <section>
      <div className="flex flex-row w-full h-[10vh] p-4 gap-4 bg-sen-blue items-center">
        <img
          src="/sen-conference/assets/SEN_small_logo.png"
          alt="SEN Badge"
          className="h-full w-auto"
        />
        <div className="flex text-white gap-2 items-end">
          <span className="font-medium text-4xl min-w-max">Blueprint Summit 2026</span>
          <span className="font-normal min-w-max">
            SEN’s Startup & Innovation Conference
          </span>
        </div>
        <div className="flex flex-row ml-auto gap-4 bg-white px-8 py-3 rounded-full font-medium text-center text-lg min-w-max">
          <span>La Jolla, CA</span>
          <span>—</span>
          <span>May 1, 2026</span>
        </div>
        <RegisterButton />
      </div>
    </section>
  );
}
