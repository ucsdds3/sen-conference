import Link from "next/link";

export default function RegisterButton() {
  return (
    <Link
      href="/tickets/select"
      className="inline-flex items-center justify-center w-fit bg-sen-yorange px-10 py-3 rounded-full"
    >
      <span className="font-semibold whitespace-nowrap text-black text-[clamp(1rem,2vw,1.35rem)]">
        Get Tickets ↗
      </span>
    </Link>
  );
}
