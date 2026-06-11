"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar/page";
import BackButton from "../components/BackButton/page";
import RotatingRectangleInput from "../components/RotatingRectangleInput/page";

export default function Where() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <>
      <Navbar />

      <section className="relative h-[calc(100vh-64px)] overflow-hidden items-center justify-center px-6">
          <p className="text-[16px] leading-6 tracking-[-0.02em] font-semibold text-[#1A1B1C]">
            TO START ANALYSIS
          </p>
        <div className="flex flex-col items-center gap-2">
          <RotatingRectangleInput
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Where are you from?"
          />
        </div>

        <BackButton />
      </section>
    </>
  );
}