"use client";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Blueprint Summit 2026
        </h1>

        <button
          onClick={() => router.push("/tickets")}
          style={{
            backgroundColor: "#FAB854",
            color: "#000",
            padding: "1rem 2.5rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Get Tickets
        </button>
      </div>
    </main>
  );
}
