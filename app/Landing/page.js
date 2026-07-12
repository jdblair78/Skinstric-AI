"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Landing() {
  const [hoverSide, setHoverSide] = useState(null);
  const router = useRouter();

  return (
    <>
      <main className="min-h-[calc(100dvh-64px)] overflow-x-clip flex flex-col px-4 sm:px-6">
        <div className="flex flex-1 flex-col items-center justify-center gap-6 py-6 sm:gap-8 md:gap-10 lg:flex-row lg:justify-between lg:py-0">
          <div
            className={`relative transition-opacity duration-500 ${
              hoverSide === "right"
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            } hidden md:block`}
          >
            <Image
              src="/Rectangle left.svg"
              alt=""
              width={250}
              height={250}
              className="block h-auto w-42.5 sm:w-47.5 md:w-55 lg:w-62.5"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onMouseEnter={() => setHoverSide("left")}
                onMouseLeave={() => setHoverSide(null)}
                className="group inline-flex items-center gap-2 rounded-md bg-[#FCFCFC] px-3 py-2 sm:px-4"
              >
                <Image
                  className="transition-transform duration-300 group-hover:scale-110"
                  src="/buttin-icon-left.svg"
                  alt=""
                  width={36}
                  height={24}
                />
                <span className="text-[12px] leading-3.5 tracking-[0.02em] sm:text-[14px] sm:leading-4">
                  Discover A.I.
                </span>
              </button>
            </div>
          </div>

          <h1
            className={`max-w-200 text-center text-[52px] leading-[0.96] tracking-[-0.02em] text-[#1A1B1C] transition-transform duration-700 ease-in-out sm:text-[72px] md:text-[92px] lg:text-[128px] ${
              hoverSide === "left"
                ? "lg:translate-x-55"
                : hoverSide === "right"
                  ? "lg:-translate-x-55"
                  : "translate-x-0"
            }`}
          >
            Sophisticated
            <br />
            skincare
          </h1>

          <div className="flex flex-col items-center gap-3 md:hidden">
            <button className="group inline-flex items-center gap-2 rounded-md bg-[#FCFCFC] px-3 py-2">
              <Image
                className="transition-transform duration-300 group-hover:scale-110"
                src="/buttin-icon-left.svg"
                alt=""
                width={36}
                height={24}
              />
              <span className="text-[12px] leading-3.5 tracking-[0.02em]">
                Discover A.I.
              </span>
            </button>

            <button
              className="group inline-flex items-center gap-2 rounded-md bg-[#FCFCFC] px-3 py-2"
              onClick={() => router.push("/Introduce")}
            >
              <span className="text-[12px] leading-3.5 tracking-[0.02em]">
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

          <div
            className={`relative transition-opacity duration-500 ${
              hoverSide === "left"
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            } hidden md:block`}
          >
            <Image
              src="/Rectangle right.svg"
              alt=""
              width={250}
              height={250}
              className="block h-auto w-42.5 sm:w-47.5 md:w-55 lg:w-62.5"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => router.push("/Introduce")}
                onMouseEnter={() => setHoverSide("right")}
                onMouseLeave={() => setHoverSide(null)}
                className="group inline-flex items-center gap-2 rounded-md bg-[#FCFCFC] px-3 py-2 sm:px-4"
              >
                <span className="text-[12px] leading-3.5 tracking-[0.02em] sm:text-[14px] sm:leading-4">
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

        <div className="pb-8 text-center text-[12px] leading-5 font-normal text-[#1A1B1C] sm:pb-12 sm:text-[13px] sm:leading-5.5 md:text-[14px] md:leading-6 lg:pb-16 lg:text-left">
          SKINSTRIC DEVELOPED AN A.I. THAT CREATES A
          <br />
          HIGHLY-PERSONALIZED ROUTINE TAILORED TO
          <br />
          WHAT YOUR SKIN NEEDS.
        </div>
      </main>
    </>
  );
}
