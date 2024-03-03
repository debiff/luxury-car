import { Lusitana, Inconsolata, Sora, Epilogue } from "next/font/google";
import localFont from "next/font/local";

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["700", "400"]
});

export const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["700", "400"]
});

export const sora = Sora({
  subsets: ["latin"],
  weight: ["700", "400"]
});

export const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["700", "400"]
});

export const elegantIcons = localFont({
  src: "../../public/fonts/ElegantIcons.woff"
});
