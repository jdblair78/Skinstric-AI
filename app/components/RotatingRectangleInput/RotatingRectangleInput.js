"use client";

import Image from "next/image";

export default function RotatingRectangleInput({
  large = 482,
  medium = 444,
  small = 405,
  value,
  onChange,
  placeholder,
  status,
  onKeyDown,
  children
}) {
  return (
    <div className="relative z-20 w-[70vw] max-w-[750px] h-[70vw] max-h-[750px] flex items-center justify-center">
      <Image
        src="/Rectangle large.svg"
        alt=""
        width={large}
        height={large}
        className="absolute z-0 spin-slow"
      />

      <Image
        src="/Rectangle med.svg"
        alt=""
        width={medium}
        height={medium}
        className="absolute z-0 spin-medium"
      />

      <Image
        src="/Rectangle small.svg"
        alt=""
        width={small}
        height={small}
        className="absolute z-0 spin-fast"
      />

     <div className="absolute inset-0 z-10 flex items-center justify-center">
  {children ? (
    <div className="relative w-[600px] h-[600px]">
      {children}
    </div>
  ) : (
    status === "processing" ? (
      <div className="flex flex-col items-center gap-4">
        <p className="text-[32px] font-semibold text-center text-[#1A1B1C]/40">
          Processing Submission
        </p>

        <div className="flex gap-2">
          <span className="loading-dot"></span>
          <span className="loading-dot animation-delay-200"></span>
          <span className="loading-dot animation-delay-400"></span>
        </div>
      </div>
    ) : status === "success" ? (
      <p className="text-[32px] font-semibold text-center text-[#1A1B1C]/40">
        Thank You!
        <br />
        Proceed for the next step
      </p>
    ) : (
      <><div className="flex-col text-center">
        <p className="text-[12px] text-[#1A1B1C]/40 uppercase mb-2">
          CLICK TO TYPE
        </p>

        <input
          type="text"
          autoFocus
          value={value}
          onChange={onChange}
          onKeyDown={(e) => {
            if (onKeyDown) {
              onKeyDown(e);
              return;
            }

            if (e.key === "Enter") {
              e.preventDefault();
              e.currentTarget.form?.requestSubmit();
            }
          }}
          placeholder={placeholder}
          className="w-[300px] h-[48px] bg-transparent text-[24px] md:text-[36px] leading-tight tracking-[-0.06em] text-[#1A1B1C] border-b border-[#1A1B1C] outline-none text-center placeholder:text-[#1A1B1C]/40"
        />
        </div>
      </>
    )
  )}
</div>
</div>
  );
}
