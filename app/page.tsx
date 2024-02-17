"use client";
import { Slider } from "@/app/ui/home/slider";
import { CallUs } from "@/app/ui/home/callUs";
import { CarPreview } from "@/app/ui/home/carPreview";
import { Reviews } from "@/app/ui/home/review";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Slider />
      <CallUs />
      <CarPreview />
      <Reviews />
    </main>
  );
}
