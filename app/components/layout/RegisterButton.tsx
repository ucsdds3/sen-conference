import Link from "next/link";

export default function RegisterButton({ classes }: { classes: string }) {
  return (
    <Link
      href="/tickets/select"
      className="bg-sen-yorange px-10 py-3 rounded-full max-w-min"
    >
      <span className={`font-semibold text-center whitespace-nowrap ${classes}`}>
        Get Tickets ↗
      </span>
    </Link>
  );
}
