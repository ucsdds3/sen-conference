import Link from "next/link";

export default function RegisterButton() {
  return (
    <Link
      href="/tickets/select"
      className="inline-flex items-center justify-center w-fit bg-sen-yorange px-10 py-3 rounded-full transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-sen-yorange focus:ring-offset-2"
    >
      <span className="font-semibold whitespace-nowrap text-black text-[clamp(1rem,2vw,1.35rem)]">
        Get Tickets <span aria-hidden="true">↗</span>
      </span>
    </Link>
  );
}
