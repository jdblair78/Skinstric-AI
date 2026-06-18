"use client";

import Navbar from "../Navbar/page";
import BackButton from "../components/BackButton/BackButton";
import ProceedBtn from "../components/ProceedBtn/ProceedBtn";
import RotatingRectangleInput from "../components/RotatingRectangleInput/RotatingRectangleInput";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Select() {
  const router = useRouter();

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
        <div className="flex flex-1 items-center justify-center">
          <RotatingRectangleInput>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[320px] h-[320px]">
                {/* Top */}
                <button
                  onClick={() => router.push("/Demographics")}
                  className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[154px]
          h-[154px]
          group
        "
                >
                  <Image
                    src="/another-ingredient (1).svg"
                    alt=""
                    width={154}
                    height={154}
                    className="transition-all duration-300 group-hover:brightness-75 cursor-pointer"
                  />
                </button>

                {/* Right */}
                <button
                  className="
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          w-[154px]
          h-[154px]
          group
        "
                >
                  <Image
                    src="/another-ingredient (2).svg"
                    alt=""
                    width={154}
                    height={154}
                    className="transition-all duration-300 group-hover:brightness-75 cursor-not-allowed"
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
          group
        "
                >
                  <Image
                    src="/another-ingredient (4).svg"
                    alt=""
                    width={154}
                    height={154}
                    className="transition-all duration-300 group-hover:brightness-75 cursor-not-allowed"
                  />
                </button>

                {/* Left */}
                <button
                  className="
          absolute
          left-0
          top-1/2
          -translate-y-1/2
          w-[154px]
          h-[154px]
          group
        "
                >
                  <Image
                    src="/another-ingredient (3).svg"
                    alt=""
                    width={154}
                    height={154}
                    className="transition-all duration-300 group-hover:brightness-75 cursor-not-allowed"
                  />
                </button>
              </div>
            </div>
          </RotatingRectangleInput>
        </div>

        <BackButton />
        <ProceedBtn />
      </section>
    </>
  );
}
