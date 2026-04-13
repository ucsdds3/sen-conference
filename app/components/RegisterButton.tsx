"use client";

export default function RegisterButton({ classes }: { classes: string }) {
  return (
    <div
      onClick={() => (window.location.href = "/tickets/select")}
      className="max-w-min cursor-pointer rounded-full bg-sen-yorange px-10 py-3 transition-all duration-200 ease-out hover:scale-105 hover:opacity-95"
    >
      <span
        className={`font-semibold text-center whitespace-nowrap ${classes}`}
      >
        Get Tickets ↗
      </span>
    </div>
  );
}
