"use client";

import Navbar from "../Navbar/page";
import BackButton from "../components/BackButton/page";
import CameraAccess from "../components/CameraAccess/page";

export default function Camera() {
  return (
    <>
      <Navbar />

      <section className="relative h-[calc(100vh-64px)] flex flex-col px-6">
        <p className="text-[16px] leading-6 tracking-[-0.02em] font-semibold text-[#1A1B1C]">
          CAMERA ACCESS
        </p>

        <div className="flex flex-1 items-center justify-center">
          <CameraAccess />
        </div>

        <BackButton />
      </section>
    </>
  );
}