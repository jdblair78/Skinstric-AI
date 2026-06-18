"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar/page";
import BackButton from "../components/BackButton/page";
import RotatingRectangleInput from "../components/RotatingRectangleInput/page";

export default function Introduce() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <>
      <Navbar />

      <section className="relative h-[calc(100vh-64px)] overflow-hidden flex flex-col px-6">
        <p className="text-[16px] leading-6 tracking-[-0.02em] font-semibold text-[#1A1B1C]">
          TO START ANALYSIS
        </p>

        <div className="flex flex-1 flex-col items-center justify-center gap-3">
          <RotatingRectangleInput
            large={750}
            medium={680}
            small={600}
            value={name}
            onChange={(event) => setName(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();

                if (!name.trim()) return;

                localStorage.setItem(
                  "skinstric_phase_one",
                  JSON.stringify({
                    name,
                  }),
                );

                router.push("/Where");
              }
            }}
            placeholder="Introduce Yourself"
          />
        </div>

        <BackButton />
      </section>
    </>
  );
}
