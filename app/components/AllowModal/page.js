// app/components/AllowModal/page.jsx
"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function AllowModal({ isOpen, onClose, title, description }) {
  const router = useRouter();

  const fileInputRef = useRef(null);

function handleFileSelect(event) {
  const file = event.target.files[0];

  if (!file) return;

  console.log("Selected file:", file);

  const imageUrl = URL.createObjectURL(file);
  console.log("Preview URL:", imageUrl);
}

  if (!isOpen) return null;

  const handleCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      console.log("Camera access granted", stream);

      // save stream or open camera view here
    } catch (error) {
      console.error("Camera access denied", error);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-90 bg-[#1A1B1C] p-6 animate-modalIn"
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
            onClick={() => router.push("/Camera")}
            className="px-4 py-2 text-[#FCFCFC] text-sm cursor-pointer hover:text-gray-500"
          >
            ALLOW
          </button>
        </div>
      </div>
    </div>
  );
}
