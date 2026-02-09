import RegisterButton from "./RegisterButton";

export default function Landing() {
  return (
    <div className="relative grid grid-cols-6 grid-rows-12 p-12 h-[90vh] justify-around">
      {/* background image */}
      <div className="absolute inset-0 -z-1">
        <img
          src="/sen-conference/assets/speaker.png"
          alt="Speaker Background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* above-the-fold content */}
      <div className="row-start-1 row-span-3 col-start-1 col-span-6 flex flex-col text-white text-7xl font-bold gap-4">
        <span>Build What Actually Works.</span>
        <span>Learn From People Who've Done It.</span>
      </div>
      <span className="row-start-5 row-span-2 col-start-1 col-span-4 text-white text-3xl font-semibold text-pretty">
        A one-day, in-person conference bringing together founders, operators,
        and builders to share practical frameworks, real lessons, and actionable
        next steps you can actually use.
      </span>
      <span className="row-start-7 row-span-1 col-start-1 col-span-4 text-sen-yorange text-2xl font-medium">
        Workshops. Panels. Real conversations. No fluff.
      </span>
      <div className="row-start-10 row-span-2 col-start-1 col-span-2">
        <RegisterButton classes="text-3xl" />
      </div>
    </div>
  );
}
