export default function WaveDivider({ flipX = false, flipY = false }: { flipX?: boolean; flipY?: boolean }) {
  const svgClass = [
    "block w-full h-32 md:h-40",
    flipX && "scale-x-[-1]",
    flipY && "scale-y-[-1]",
    flipY ? "mb-px -translate-y-px" : "-mb-px translate-y-px",
  ].filter(Boolean).join(" ");

  return (
    <div className="block overflow-hidden leading-none bg-white">
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgClass}
        aria-hidden="true"
      >
        <path
          d="M0,0 C300,60 900,0 1200,40 L1200,60 L0,60 Z"
          fill="var(--color-sen-blue)"
        />
      </svg>
    </div>
  );
}
