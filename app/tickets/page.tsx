"use client";
import { useRouter } from "next/navigation";

export default function TicketsPage() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "2.5rem",
          border: "1px solid #ddd",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "0.5rem" }}>
          Ticket Details
        </h2>

        <p style={{ color: "#555", marginBottom: "2rem" }}>
          Review your ticket information before payment.
        </p>

        {/* Placeholder for form fields */}
        <div
          style={{
            height: "80px",
            background: "#f5f5f5",
            borderRadius: "6px",
            marginBottom: "2rem",
          }}
        />

        <button
          onClick={() => router.push("/tickets/payment")}
          style={{
            width: "100%",
            backgroundColor: "#FAB854",
            padding: "0.9rem",
            fontWeight: 600,
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Continue to Payment
        </button>
      </div>
    </main>
  );
}
