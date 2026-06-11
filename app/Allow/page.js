"use client";

import Navbar from "../Navbar/page";
import BackButton from "../components/BackButton/page";
import Image from "next/image";

export default function Allow() {
  return (
    <>
      <Navbar />
      <section className="relative h-[calc(100vh-64px)] overflow-hidden flex flex-col px-6">
        <p className="text-[16px] leading-6 tracking-[-0.02em] font-semibold text-[#1A1B1C]">
          TO START ANALYSIS
        </p>
        <div className="flex-1 flex items-center justify-between w-full">
          <div className="relative w-1/2 h-125 flex items-center justify-center">
            <Image
              src="/Rectangle large.svg"
              alt=""
              width={482}
              height={482}
              className="absolute z-0 spin-slow"
            />
            <Image
              src="/Rectangle med.svg"
              alt=""
              width={444}
              height={444}
              className="absolute z-0 spin-medium"
            />
            <Image
              src="/Rectangle small.svg"
              alt=""
              width={405}
              height={405}
              className="absolute z-0 spin-fast"
            />
          </div>
          <div className="relative w-1/2 h-125 flex items-center justify-center">
            <Image
              src="/Rectangle large.svg"
              alt=""
              width={482}
              height={482}
              className="absolute z-0 spin-slow"
            />
            <Image
              src="/Rectangle med.svg"
              alt=""
              width={444}
              height={444}
              className="absolute z-0 spin-medium"
            />
            <Image
              src="/Rectangle small.svg"
              alt=""
              width={405}
              height={405}
              className="absolute z-0 spin-fast"
            />
          </div>
        </div>
        <BackButton />
      </section>
    </>
  );
}
