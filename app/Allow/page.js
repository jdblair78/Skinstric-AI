"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar/page";
import BackButton from "../components/BackButton/page";
import Image from "next/image";

export default function Allow() {
  const [modalType, setModalType] = useState(null);
  const fileInputRef = useRef(null);
  const router = useRouter();

  function handleAllow() {
    if (modalType === "camera") {
      router.push("/Camera");
      return;
    }

    if (modalType === "gallery") {
      fileInputRef.current?.click();
    }
  }

  function handleFileSelect(event) {
    const file = event.target.files[0];

    if (!file) return;

    console.log("Selected file:", file);

    const imageUrl = URL.createObjectURL(file);
    console.log("Preview URL:", imageUrl);

    setModalType(null);
  }

  return (
    <>
      <Navbar />

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileSelect}
      />

      <section className="relative h-[calc(100vh-64px)] overflow-hidden flex flex-col px-6">
        <p className="text-[16px] leading-6 tracking-[-0.02em] font-semibold text-[#1A1B1C]">
          TO START ANALYSIS
        </p>

        <div className="flex flex-1 items-center justify-center">
          <div className="relative w-1/2 h-[500px] flex items-center justify-center">
            <Image src="/Rectangle large.svg" alt="" width={482} height={482} className="absolute z-0 spin-slow" />
            <Image src="/Rectangle med.svg" alt="" width={444} height={444} className="absolute z-0 spin-medium" />
            <Image src="/Rectangle small.svg" alt="" width={405} height={405} className="absolute z-0 spin-fast" />

            <div className="relative z-10">
              <button
                type="button"
                onClick={() => setModalType("camera")}
                className="p-0 bg-transparent border-0 cursor-pointer"
              >
                <Image src="/shutter-icon.svg" alt="camera" width={136} height={136} className="transition-transform duration-150 hover:scale-[1.08]" />
              </button>

              <Image src="/shutter-line.svg" alt="" width={85} height={85} className="absolute -top-12 -right-20" />

              <p className="absolute -top-18 -right-76 w-55 text-sm font-medium leading-6">
                ALLOW A.I.
                <br />
                TO SCAN YOUR FACE
              </p>
            </div>
          </div>

          <div className="relative w-1/2 h-[500px] flex items-center justify-center">
            <Image src="/Rectangle large.svg" alt="" width={482} height={482} className="absolute z-0 spin-slow" />
            <Image src="/Rectangle med.svg" alt="" width={444} height={444} className="absolute z-0 spin-medium" />
            <Image src="/Rectangle small.svg" alt="" width={405} height={405} className="absolute z-0 spin-fast" />

            <div className="relative z-10">
              <button
                type="button"
                onClick={() => setModalType("gallery")}
                className="p-0 bg-transparent border-0 cursor-pointer"
              >
                <Image src="/gallery-icon.svg" alt="gallery" width={136} height={136} className="transition-transform duration-150 hover:scale-[1.08]" />
              </button>

              <Image src="/shutter-line.svg" alt="" width={85} height={85} className="absolute -bottom-10 -left-20 rotate-180" />

              <p className="absolute -bottom-18 -left-42 w-55 text-sm font-medium leading-6">
                ALLOW A.I.
                <br />
                ACCESS GALLERY
              </p>
            </div>
          </div>
        </div>

        <BackButton />
      </section>

      {modalType && (
        <div
          onClick={() => setModalType(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[360px] bg-[#1A1B1C] p-6 animate-modalIn"
          >
            <h2 className="text-[20px] font-semibold mb-3 text-[#FCFCFC]">
              {modalType === "camera"
                ? "Allow A.I. to scan your face"
                : "Allow A.I. access gallery"}
            </h2>

            <p className="text-sm text-[#FCFCFC]/70 mb-6">
              {modalType === "camera"
                ? "This will request access to your camera."
                : "This will let you choose an image from your device."}
            </p>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setModalType(null)}
                className="px-4 py-2 text-[#FCFCFC] text-sm cursor-pointer hover:text-gray-500"
              >
                DENY
              </button>

              <button
                onClick={handleAllow}
                className="px-4 py-2 text-[#FCFCFC] text-sm cursor-pointer hover:text-gray-500"
              >
                ALLOW
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}