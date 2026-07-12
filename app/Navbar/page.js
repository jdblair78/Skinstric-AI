"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const showEnterCode = pathname === "/";

  return (
    <nav className="w-full h-14 sm:h-16">
      <div className="mx-auto flex h-full max-w-full items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-8">
          <button
            className="btn text-xs font-semibold uppercase tracking-tight sm:text-sm"
            onClick={() => router.push("/")}
          >
            SKINSTRIC
          </button>

          <button className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-tight opacity-60 sm:flex sm:text-sm">
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
          <button className="btn border bg-[#1A1B1C] px-3 py-2 text-xs font-semibold text-[#FCFCFC] sm:px-4 sm:text-sm">
            ENTER CODE
          </button>
        )}
      </div>
    </nav>
  );
}
