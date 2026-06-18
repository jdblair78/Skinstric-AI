"use client";

import Image from "next/image";

export default function AIConfidence({ data, onSelect }) {
  if (!data) return null;

  return (
    <div className="bg-[#F3F3F3] text-center h-full">
      <div className="font-semibold mb-4 border-t py-3">
        {data.confidenceTitle}
      </div>

      {data.results.map((item) => (
        <button
          key={item.label}
          onClick={() => onSelect(item.label)}
          className="w-full flex justify-between items-center px-3 pb-4 text-left hover:bg-[#E1E1E2]"
        >
          <div className="flex items-center gap-2">
            <Image src="/radio-button.svg" alt="" width={20} height={20} />
            <span>{item.label.toUpperCase()}</span>
          </div>

          <span>{item.percent}%</span>
        </button>
      ))}
    </div>
  );
}