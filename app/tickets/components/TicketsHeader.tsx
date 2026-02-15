import Image from "next/image";

export default function TicketsHeader() {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      <Image
        src="/sen-conference/assets/SEN_small_logo.png"
        alt="SEN Logo"
        width={60}
        height={60}
      />
      <div className="text-left">
        <h1 className="text-2xl font-bold text-black">
          Blueprint Summit 2026
        </h1>
        <p className="text-sm text-gray-600">
          SEN’s Startup & Innovation Conference
        </p>
      </div>
    </div>
  );
}