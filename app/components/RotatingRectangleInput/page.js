"use client";

import Image from "next/image";

export default function RotatingRectangleInput({
  value,
  onChange,
  placeholder,
  onKeyDown,
}) {
  return (
    <div className="relative z-20 w-[70vw] max-w-[720px] h-[70vw] max-h-[720px] flex items-center justify-center">
      <Image
        src="/Rectangle large.svg"
        alt=""
        width={720}
        height={720}
        className="absolute z-0 spin-slow"
      />

      <Image
        src="/Rectangle med.svg"
        alt=""
        width={660}
        height={660}
        className="absolute z-0 spin-medium"
      />

      <Image
        src="/Rectangle small.svg"
        alt=""
        width={600}
        height={600}
        className="absolute z-0 spin-fast"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
        <p className="text-[12px] text-[#1A1B1C]/40 uppercase mb-2">
          CLICK TO TYPE
        </p>

        <textarea
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          rows={1}
          className="w-[320px] max-w-full h-[64px] resize-none bg-transparent text-[24px] md:text-[36px] leading-tight tracking-[-0.06em] text-[#1A1B1C] border-b border-[#1A1B1C] outline-none text-center placeholder:text-[#1A1B1C]/40"
        />
      </div>
    </div>
  );
}
