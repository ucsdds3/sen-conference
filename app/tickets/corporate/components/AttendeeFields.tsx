"use client";

type AttendeeFieldsProps = {
  attendeeNames: string[];
  quantity: number;
  onChange: (index: number, value: string) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
  error?: string;
};

export default function AttendeeFields({
  attendeeNames,
  quantity,
  onChange,
  onAdd,
  onRemove,
  error,
}: AttendeeFieldsProps) {
  const canAdd = attendeeNames.length < quantity;

  return (
    <div className="sm:col-span-2 rounded-lg border border-slate-200 p-4">
      <div className="mb-3 flex items-center justify-between">
        <label className="text-xs font-medium">Attendee Names (Optional)</label>
        <button
          type="button"
          onClick={onAdd}
          disabled={!canAdd}
          className="rounded-md border border-sen-blue px-3 py-1 text-xs font-semibold text-sen-blue transition hover:bg-sen-blue/5 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Add Attendee
        </button>
      </div>

      <div className="space-y-2">
        {attendeeNames.length === 0 ? (
          <p className="text-xs text-slate-500">
            Add attendee names if you want them pre-registered before checkout.
          </p>
        ) : (
          attendeeNames.map((name, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                value={name}
                onChange={(e) => onChange(index, e.target.value)}
                className="w-full rounded-md bg-[#D9D9D9] px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-sen-yorange"
                placeholder={`Attendee ${index + 1} full name`}
                type="text"
              />
              <button
                type="button"
                onClick={() => onRemove(index)}
                className="rounded-md border border-red-300 px-3 py-2 text-xs font-medium text-red-600 transition hover:bg-red-50"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {error ? <p className="mt-2 text-xs text-red-500">{error}</p> : null}
    </div>
  );
}
