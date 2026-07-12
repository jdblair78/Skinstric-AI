"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProceedBtn() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/Allow")}
      className="group flex items-center gap-3 text-[14px] uppercase font-semibold text-[#1A1B1C]"
    >
      <span>Proceed</span>

      <Image
        className="transition-transform duration-300 group-hover:scale-110 cursor-pointer"
        src="/buttin-icon-right.svg"
        alt="Proceed"
        width={44}
        height={44}
      />
    </button>
  );
}
