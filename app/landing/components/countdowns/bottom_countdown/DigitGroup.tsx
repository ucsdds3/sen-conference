import FlipDigit from "./FlipDigit";

export default function DigitGroup({
  value,
  digits,
  label,
}: {
  value: number;
  digits: number;
  label: string;
}) {
  const padded = value.toString().padStart(digits, "0").split("");

  return (
    <div className="flex flex-col items-center">
      {/* Container for digits */}
      <div className="flex gap-2">
        {padded.map((digit, i) => (
          <FlipDigit key={`pos-${i}`} value={digit} />
        ))}
      </div>

      {/* Label below digits */}
      <span className="mt-[clamp(1rem,2vw,1.5rem)] text-white font-semibold tracking-[0.35em] text-[clamp(0.85rem,1.4vw,1.15rem)]">
        {label}
      </span>
    </div>
  );
}