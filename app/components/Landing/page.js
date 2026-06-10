"use client";

import { useState } from "react";
import Image from "next/image";

export default function Landing() {
  const [hoverSide, setHoverSide] = useState(null);

  return (
    <main className="h-[calc(100vh-64px)] overflow-hidden flex flex-col px-6">
      <div className="flex flex-1 items-center justify-between">

        {/* LEFT SIDE */}
        <div
  className={`relative transition-opacity duration-500 ${
    hoverSide === "right"
      ? "opacity-0 pointer-events-none"
      : "opacity-100"
  }`}

        >
          <Image
            src="/Rectangle left.svg"
            alt=""
            width={250}
            height={250}
            className="block"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onMouseEnter={() => setHoverSide("left")}
              onMouseLeave={() => setHoverSide(null)}
              className="group inline-flex items-center gap-2 bg-[#FCFCFC] px-4 py-2 rounded-md"
            >
              <Image
                className="transition-transform duration-300 group-hover:scale-110"
                src="/buttin-icon-left.svg"
                alt=""
                width={36}
                height={24}
              />
              <span className="text-[14px] leading-[16px] tracking-[0.02em]">
                Discover A.I.
              </span>
            </button>
          </div>
        </div>

        {/* CENTER TEXT */}
        <h1
          className={`max-w-[800px] text-center text-[96px] md:text-[128px] leading-[1] tracking-[-0.02em] text-[#1A1B1C] transition-transform duration-700 ease-in-out ${
            hoverSide === "left"
              ? "translate-x-[220px]"
              : hoverSide === "right"
              ? "-translate-x-[220px]"
              : "translate-x-0"
          }`}
        >
          Sophisticated
          <br />
          skincare
        </h1>

        {/* RIGHT SIDE */}
      <div
  className={`relative transition-opacity duration-500 ${
    hoverSide === "left"
      ? "opacity-0 pointer-events-none"
      : "opacity-100"
  }`}
>
          <Image
            src="/Rectangle right.svg"
            alt=""
            width={250}
            height={250}
            className="block"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onMouseEnter={() => setHoverSide("right")}
              onMouseLeave={() => setHoverSide(null)}
              className="group inline-flex items-center gap-2 bg-[#FCFCFC] px-4 py-2 rounded-md"
            >
              <span className="text-[14px] leading-[16px] tracking-[0.02em]">
                TAKE TEST
              </span>
              <Image
                className="transition-transform duration-300 group-hover:scale-110"
                src="/buttin-icon-right.svg"
                alt=""
                width={36}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="pb-16 text-left text-[14px] leading-[24px] font-normal text-[#1A1B1C]">
        SKINSTRIC DEVELOPED AN A.I. THAT CREATES A
        <br />
        HIGHLY-PERSONALIZED ROUTINE TAILORED TO
        <br />
        WHAT YOUR SKIN NEEDS.
      </div>
    </main>
  );
}