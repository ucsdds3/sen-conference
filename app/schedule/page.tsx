import type { Metadata } from "next";
import PageLayout from "../components/layout/PageLayout";
import ScheduleCarousel from "./components/ScheduleCarousel";

export const metadata: Metadata = {
  title: "Schedule",
  description: "Full event schedule for Blueprint Summit 2026.",
};

export default function SchedulePage() {
  return (
    <PageLayout>
      <ScheduleCarousel />
    </PageLayout>
  );
}
