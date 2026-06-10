"use client";

import { useState } from "react";
import Navbar from "../Navbar/page";
import Image from "next/image";

export default function Introduce() {
  const [name, setName] = useState("");

  return (
    <>
      <Navbar />
      <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-12">
        <div className="flex flex-col items-center gap-4">
          <div className="text-[16px] leading-6 tracking-[-0.02em] font-semibold text-[#1A1B1C] ">
            <p>TO START ANALYSIS</p>
          </div>
          <div className="relative z-20 w-[85vw] max-w-[760px] h-[85vw] max-h-[760px] flex items-center justify-center">
            <Image
              src="/Rectangle large.svg"
              alt=""
              width={762}
              height={762}
              className="absolute z-0 spin-slow"
            />

            <Image
              src="/Rectangle med.svg"
              alt=""
              width={682}
              height={682}
              className="absolute z-0 spin-medium"
            />

            <Image
              src="/Rectangle small.svg"
              alt=""
              width={602}
              height={602}
              className="absolute z-0 spin-fast"
            />

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
              <p className="text-[12px] text-[#1A1B1C]/40 uppercase mb-2">
                CLICK TO TYPE
              </p>

              <textarea
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Introduce Yourself"
                className="max-w-[420px] h-[65px] resize-none bg-transparent text-[32px] md:text-[48px] leading-tight tracking-[-0.06em] text-[#1A1B1C] border-b border-[#1A1B1C] outline-none text-center placeholder:text-[#1A1B1C]/40"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//ToDo.  The rectangle images need to rotate clockwise at different speeds
