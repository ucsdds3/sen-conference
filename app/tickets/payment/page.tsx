"use client";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
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
        <h2>Payment</h2>
        <p style={{ color: "#555", marginBottom: "1.5rem" }}>
          Secure checkout powered by Stripe
        </p>

        <div
          style={{
            height: "200px",
            border: "2px dashed #ccc",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "2rem",
            color: "#777",
          }}
        >
          Stripe Embedded Form
        </div>

        <button
          onClick={() => router.push("/tickets/confirmation/success")}
          style={{
            width: "100%",
            backgroundColor: "#FAB854",
            padding: "0.9rem",
            fontWeight: 600,
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "0.75rem",
          }}
        >
          Complete Payment
        </button>

        <button
          onClick={() => router.push("/tickets/confirmation/error")}
          style={{
            background: "none",
            border: "none",
            color: "#999",
            cursor: "pointer",
          }}
        >
          Simulate Error
        </button>
      </div>
    </main>
  );
}
