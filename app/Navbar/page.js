"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const showEnterCode = pathname === "/";

  return (
    <nav className="w-full h-16">
      <div className="max-w-full mx-auto h-full flex items-center justify-between px-6">

        <div className="flex items-center gap-8">
          <button
            className="btn text-sm uppercase font-semibold tracking-tight"
            onClick={() => router.push("/Landing")}
          >
            SKINSTRIC
          </button>

          <button className="flex items-center gap-2 text-sm uppercase font-semibold tracking-tight opacity-60">
            <Image
              src="/Rectangle 2710 (1).svg"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
            INTRO
            <Image
              src="/Rectangle 2711.svg"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </button>
        </div>

        {showEnterCode && (
          <button className="btn px-4 py-2 bg-[#1A1B1C] border text-sm font-semibold text-[#FCFCFC]">
            ENTER CODE
          </button>
        )}

      </div>
    </nav>
  );
}
