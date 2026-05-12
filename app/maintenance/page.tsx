import Image from "next/image";
import Link from "next/link";

export default function MaintenancePage() {
  return (
    <main className="h-dvh flex items-center justify-center px-4 py-4 bg-sen-blue md:bg-linear-to-r md:from-sen-blue md:from-50% md:to-sen-muted">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center rounded-xl bg-white p-8 text-center shadow-[0px_0px_20px_white] md:p-12">
        <Image
          src="/assets/rocket-maintenance.png"
          alt="Rocket under maintenance"
          width={200}
          height={200}
          className="h-auto w-full max-w-50 object-contain"
        />

        <h1 className="mt-4 md:mt-8 text-3xl font-bold tracking-tight text-sen-blue md:text-5xl">
          Page under maintenance
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-sen-blue/70 md:text-lg">
          We are updating this section right now. Please check back soon for the
          latest conference details.
        </p>

        <Link
          href="/"
          className="mt-4 md:mt-8 inline-flex rounded-full bg-sen-yorange px-8 py-3 text-base font-semibold text-black transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sen-blue focus:ring-offset-2"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
