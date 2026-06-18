"use client";

export default function AllowModal({
  isOpen,
  onClose,
  title,
  description,
  onAllow,
}) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[360px] bg-[#1A1B1C] p-6 animate-modalIn"
      >
        <h2 className="text-[20px] font-semibold mb-3 text-[#FCFCFC]">
          {title}
        </h2>

        <p className="text-sm text-[#FCFCFC]/70 mb-6">{description}</p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[#FCFCFC] text-sm cursor-pointer hover:text-gray-500"
          >
            DENY
          </button>

          <button
            onClick={onAllow}
            className="px-4 py-2 text-[#FCFCFC] text-sm cursor-pointer hover:text-gray-500"
          >
            ALLOW
          </button>
        </div>
      </div>
    </div>
  );
}