"use client";

export default function Progress({ percent = 0 }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (percent / 100) * circumference;

  return (
    <div className="relative w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] lg:w-[390px] lg:h-[390px] flex items-center justify-center">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#D9D9D9"
          strokeWidth="2"
        />

        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#1A1B1C"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
        />
      </svg>

      <p className="absolute text-[24px] sm:text-[32px] lg:text-[40px] text-[#1A1B1C]">
        {percent}%
      </p>
    </div>
  );
}