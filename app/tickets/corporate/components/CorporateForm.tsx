"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import AttendeeFields from "./AttendeeFields";

type CorporateFormState = {
  company: string;
  industry: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ticketType: string;
  quantity: string;
  reach: string;
};

type FieldErrors = Partial<
  Record<keyof CorporateFormState | "attendeeNames", string>
>;

const TICKET_OPTIONS = ["General Admission", "Premium", "VIP"];

const HEAR_ABOUT_OPTIONS = [
  { value: "social media", label: "Social media" },
  { value: "website", label: "Website" },
  { value: "word of mouth", label: "Word of mouth" },
];

const emptyState: CorporateFormState = {
  company: "",
  industry: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  ticketType: "",
  quantity: "1",
  reach: "",
};

export default function CorporateForm() {
  const [form, setForm] = useState<CorporateFormState>(emptyState);
  const [attendeeNames, setAttendeeNames] = useState<string[]>([]);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);

  const quantityNumber = useMemo(
    () => Math.max(1, Number(form.quantity) || 1),
    [form.quantity],
  );

  const trimmedAttendees = useMemo(
    () => attendeeNames.map((name) => name.trim()).filter(Boolean),
    [attendeeNames],
  );

  useEffect(() => {
    // Clear attendee-name errors as the user types, since attendee input is optional.
    setErrors((prev) =>
      prev.attendeeNames ? { ...prev, attendeeNames: undefined } : prev,
    );
  }, [trimmedAttendees]);

  function validateField(
    name: keyof CorporateFormState,
    value: string,
  ): string {
    if (!value.trim()) return "This field is required.";
    if (name === "email" && !/^\S+@\S+\.\S+$/.test(value))
      return "Enter a valid email address.";
    if (
      name === "quantity" &&
      (Number(value) < 1 || !Number.isInteger(Number(value)))
    ) {
      return "Quantity must be a whole number of at least 1.";
    }
    return "";
  }

  function validateForm(
    values: CorporateFormState,
    names: string[],
  ): FieldErrors {
    const nextErrors: FieldErrors = {};

    (Object.keys(values) as (keyof CorporateFormState)[]).forEach((key) => {
      const error = validateField(key, values[key]);
      if (error) nextErrors[key] = error;
    });

    // Attendee names are optional: allow partial input.
    // Only validate that we don't exceed the purchased quantity.
    const filledNames = names.map((name) => name.trim()).filter(Boolean);
    const qty = Math.max(1, Number(values.quantity) || 1);
    if (filledNames.length > qty) {
      nextErrors.attendeeNames = `You can enter at most ${qty} attendee name(s).`;
    }

    return nextErrors;
  }

  function updateField(name: keyof CorporateFormState, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      const nextError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: nextError || undefined }));
    }
  }

  function syncAttendeesToQuantity(nextQuantity: number) {
    setAttendeeNames((prev) => {
      if (prev.length > nextQuantity) return prev.slice(0, nextQuantity);
      return prev;
    });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
    const validationErrors = validateForm(form, attendeeNames);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      const attendeeNamesForCheckout = trimmedAttendees;
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          purchaseType: "corporate",
          firstName: form.firstName,
          lastName: form.lastName,
          company: form.company,
          industry: form.industry,
          email: form.email,
          phone: form.phone,
          ticketType: form.ticketType,
          quantity: Number(form.quantity),
          reach: form.reach,
          attendeeNames: attendeeNamesForCheckout,
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }

      setErrors((prev) => ({
        ...prev,
        attendeeNames: "Unable to start checkout. Please try again.",
      }));
    } catch {
      setErrors((prev) => ({
        ...prev,
        attendeeNames: "Network error. Please try again.",
      }));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex min-h-0 flex-1 flex-col gap-8">
      <div className="flex flex-1 flex-col gap-6">
        <section className="grid grid-cols-1 gap-4 rounded-lg border border-slate-200 p-4 md:grid-cols-2">
          <h2 className="col-span-2 text-sm font-semibold text-sen-blue">
            Company Info
          </h2>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium">Company Name *</label>
            <input
              value={form.company}
              onChange={(e) => updateField("company", e.target.value)}
              className="rounded-md bg-[#D9D9D9] px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-sen-yorange"
              type="text"
            />
            {errors.company ? (
              <p className="text-xs text-red-500">{errors.company}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium">Industry *</label>
            <input
              value={form.industry}
              onChange={(e) => updateField("industry", e.target.value)}
              className="rounded-md bg-[#D9D9D9] px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-sen-yorange"
              type="text"
            />
            {errors.industry ? (
              <p className="text-xs text-red-500">{errors.industry}</p>
            ) : null}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 rounded-lg border border-slate-200 p-4 md:grid-cols-2">
          <h2 className="col-span-2 text-sm font-semibold text-sen-blue">
            Contact Info
          </h2>

          <div className="flex flex-col gap-1 justify-end">
            <label className="text-xs font-medium">First Name *</label>
            <input
              value={form.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
              type="text"
            />
            {errors.firstName ? (
              <p className="text-xs text-red-500">{errors.firstName}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-1 justify-end">
            <label className="text-xs font-medium">Last Name *</label>
            <input
              value={form.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
              type="text"
            />
            {errors.lastName ? (
              <p className="text-xs text-red-500">{errors.lastName}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-1 justify-end">
            <label className="text-xs font-medium">Email *</label>
            <input
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
              type="email"
            />
            {errors.email ? (
              <p className="text-xs text-red-500">{errors.email}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-1 justify-end">
            <label className="text-xs font-medium">Phone Number *</label>
            <input
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
              type="tel"
            />
            {errors.phone ? (
              <p className="text-xs text-red-500">{errors.phone}</p>
            ) : null}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 rounded-lg border border-slate-200 p-4 md:grid-cols-2">
          <h2 className="col-span-2 text-sm font-semibold text-sen-blue">
            Ticket Details
          </h2>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium">Ticket Type *</label>
            <select
              value={form.ticketType}
              onChange={(e) => updateField("ticketType", e.target.value)}
              className="rounded-md bg-[#D9D9D9] px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-sen-yorange"
            >
              <option value="" disabled>
                Select a ticket type
              </option>
              {TICKET_OPTIONS.map((ticket) => (
                <option key={ticket} value={ticket}>
                  {ticket}
                </option>
              ))}
            </select>
            {errors.ticketType ? (
              <p className="text-xs text-red-500">{errors.ticketType}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium">Number of Tickets *</label>
            <input
              value={form.quantity}
              onChange={(e) => {
                updateField("quantity", e.target.value);
                syncAttendeesToQuantity(
                  Math.max(1, Number(e.target.value) || 1),
                );
              }}
              min={1}
              step={1}
              className="rounded-md bg-[#D9D9D9] px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-sen-yorange"
              type="number"
            />
            {errors.quantity ? (
              <p className="text-xs text-red-500">{errors.quantity}</p>
            ) : null}
          </div>

          <div className="col-span-2 flex flex-col gap-1">
            <label className="text-xs font-medium">
              How did you hear about the event? *
            </label>
            <select
              value={form.reach}
              onChange={(e) => updateField("reach", e.target.value)}
              className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
            >
              <option value="" disabled>
                Click for dropdown
              </option>
              {HEAR_ABOUT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.reach ? (
              <p className="text-xs text-red-500">{errors.reach}</p>
            ) : null}
          </div>

          <AttendeeFields
            attendeeNames={attendeeNames}
            quantity={quantityNumber}
            onChange={(index, value) => {
              setAttendeeNames((prev) => {
                const next = [...prev];
                next[index] = value;
                return next;
              });
            }}
            onAdd={() =>
              setAttendeeNames((prev) =>
                prev.length < quantityNumber ? [...prev, ""] : prev,
              )
            }
            onRemove={(index) =>
              setAttendeeNames((prev) =>
                prev.filter((_, currentIndex) => currentIndex !== index),
              )
            }
            error={errors.attendeeNames}
          />
        </section>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-auto w-full rounded-lg bg-sen-blue py-3 text-md font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Redirecting to Checkout..." : "Proceed to Checkout"}
      </button>
    </form>
  );
}
