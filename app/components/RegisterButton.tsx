"use client";

export default function RegisterButton({ classes }: { classes: string }) {
  return (
    <div
      onClick={() => (window.location.href = "/sen-conference/tickets")}
      className="bg-sen-yorange px-10 py-3 rounded-full max-w-min cursor-pointer"
    >
      <span
        className={`font-semibold text-center whitespace-nowrap ${classes}`}
      >
        Get Tickets ↗
      </span>
    </div>
  );
}
