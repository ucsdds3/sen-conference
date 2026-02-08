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
          <span className="font-medium text-4xl">Blueprint Summit 2026</span>
          <span className="font-normal">
            SEN’s Startup & Innovation Conference
          </span>
        </div>
        <div className="flex flex-row ml-auto gap-4 bg-white px-8 py-3 rounded-full font-medium text-center text-lg">
          <span>La Jolla, CA</span>
          <span>—</span>
          <span>May 1, 2026</span>
        </div>
        <div className="bg-sen-yorange px-8 py-3 rounded-full text-xl font-semibold text-center">
          Get Tickets ↗
        </div>
      </div>
    </section>
  );
}
