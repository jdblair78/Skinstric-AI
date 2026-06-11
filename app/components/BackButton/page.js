"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="absolute bottom-24 left-8 flex items-center gap-3 text-[14px] uppercase font-semibold text-[#1A1B1C]"
    >
      <Image
        className="transition-transform duration-300 group-hover:scale-110"
        src="/buttin-icon-left.svg"
        alt="Back"
        width={44}
        height={44}
      />
      Back
    </button>
  );
}
