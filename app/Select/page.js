"use client";

import Navbar from "../Navbar/page";
import BackButton from "../components/BackButton/page";
import ProceedBtn from "../components/ProceedBtn/page";
import Image from "next/image";

export default function Where() {
  return (
  <>
    <Navbar />

    <section className="relative h-[calc(100vh-64px)] overflow-hidden flex flex-col px-6">
      <p className="text-[16px] leading-6 tracking-[-0.02em] font-semibold text-[#1A1B1C]">
        A.I ANALYSIS
      </p>

      <p className="text-[12px] leading-6 tracking-[-0.02em] font-normal text-[#1A1B1C]">
        A.I HAS ESTIMATED THE FOLLOWING:
        <br />
        FIX ESTIMATED INFORMATION IF NEEDED.
      </p>

     <div className="flex-1 flex items-center justify-center">
  <div className="relative w-[320px] h-[320px]">

    {/* Top */}
    <button
      className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[154px]
        h-[154px]
        cursor-pointer
        group
      "
    >
    <Image
      src="/another-ingredient (1).svg"
      alt=""
      width={154}
      height={154}
      className="block
      transition-all duration-300
      group-hover:brightness-75"
    />
     
          </button>

    {/* Left */}
     <button
      className="
        absolute
        top-1/2
        left-0
        -translate-y-1/2
        w-[154px]
        h-[154px]
        cursor-pointer
        group
      "
    >
    <Image
      src="/another-ingredient (2).svg"
      alt=""
      width={154}
      height={154}
      className="block
      transition-all duration-300
      group-hover:brightness-75"
    />
     
          </button>

    {/* Right */}
      <button
      className="
        absolute
        top-1/2
        right-0
        -translate-y-1/2
        w-[154px]
        h-[154px]
        cursor-pointer
        group
      "
    >
    <Image
      src="/another-ingredient (3).svg"
      alt=""
      width={154}
      height={154}
      className="block
      transition-all duration-300
      group-hover:brightness-75"
    />
     
          </button>

    {/* Bottom */}
  <button
  className="
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2
    w-[154px]
    h-[154px]
    cursor-pointer
    group
  "
>
  <Image
    src="/another-ingredient (4).svg"
    alt=""
    width={154}
    height={154}
    className="
      block
      transition-all
      duration-300
      group-hover:brightness-75
    "
  />
</button>

  </div>
</div>

      <BackButton />
      <ProceedBtn />
    </section>
  </>
);
}