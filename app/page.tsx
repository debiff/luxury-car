"use client";
import { Slider } from "@/app/ui/dashboard/slider";
import { CallUs } from "@/app/ui/dashboard/callUs";
import { CarPreview } from "@/app/ui/dashboard/carPreview";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Slider />
      <CallUs />
      <CarPreview />
    </main>
  );
}
