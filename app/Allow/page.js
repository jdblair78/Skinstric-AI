"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar/page";
import BackButton from "../components/BackButton/BackButton";
import RotatingRectangleInput from "../components/RotatingRectangleInput/RotatingRectangleInput";
import AllowModal from "../components/AllowModal/AllowModal";
import Image from "next/image";

export default function Allow() {
  const [modalType, setModalType] = useState(null);
  const [status, setStatus] = useState("");
  const fileInputRef = useRef(null);
  const router = useRouter();


async function handleFileSelect(event) {
  const file = event.target.files[0];

  if (!file) return;

  setStatus("processing");

  const reader = new FileReader();

  reader.onloadend = async () => {
    try {
      const imageBase64 = reader.result;

      localStorage.setItem("skinstric_uploaded_image", imageBase64);

      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image: imageBase64,
          }),
        }
      );

      const result = await response.json();


      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Image analysis failed");
      }

      localStorage.setItem("skinstric_results", JSON.stringify(result));

      router.push("/Demographics");
    } catch (error) {
      setStatus("");
    }
  };

  reader.readAsDataURL(file);
}

function handleAllow() {
  if (modalType === "camera") {
    router.push("/Camera");
    return;
  }

  if (modalType === "gallery") {
    setModalType(null);
    fileInputRef.current?.click();
  }
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

        {status === "processing" ? (
          <div
            className="
              flex
              flex-col
              md:flex-row
              flex-1
              items-center
              justify-center
            "
          >
            <RotatingRectangleInput
              large={750}
              medium={680}
              small={600}
              status={status}
            />
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <div className="relative w-1/2 h-[500px] flex items-center justify-center">
              <Image
                src="/Rectangle large.svg"
                alt=""
                width={482}
                height={482}
                className="absolute z-0 spin-slow"
              />

              <Image
                src="/Rectangle med.svg"
                alt=""
                width={444}
                height={444}
                className="absolute z-0 spin-medium"
              />

              <Image
                src="/Rectangle small.svg"
                alt=""
                width={405}
                height={405}
                className="absolute z-0 spin-fast"
              />

              <div className="relative z-10">
                <button
                  type="button"
                  onClick={() => setModalType("camera")}
                  className="p-0 bg-transparent border-0 cursor-pointer"
                >
                  <Image
                    src="/shutter-icon.svg"
                    alt="camera"
                    width={136}
                    height={136}
                    className="transition-transform duration-150 hover:scale-[1.08]"
                  />
                </button>

                <Image
                  src="/shutter-line.svg"
                  alt=""
                  width={85}
                  height={85}
                  className="absolute -top-12 -right-20"
                />

                <p className="absolute -top-18 -right-76 w-55 text-sm font-medium leading-6">
                  ALLOW A.I.
                  <br />
                  TO SCAN YOUR FACE
                </p>
              </div>
            </div>

            <div className="relative w-1/2 h-[500px] flex items-center justify-center">
              <Image
                src="/Rectangle large.svg"
                alt=""
                width={482}
                height={482}
                className="absolute z-0 spin-slow"
              />

              <Image
                src="/Rectangle med.svg"
                alt=""
                width={444}
                height={444}
                className="absolute z-0 spin-medium"
              />

              <Image
                src="/Rectangle small.svg"
                alt=""
                width={405}
                height={405}
                className="absolute z-0 spin-fast"
              />

              <div className="relative z-10">
                <button
                  type="button"
                  onClick={() => setModalType("gallery")}
                  className="p-0 bg-transparent border-0 cursor-pointer"
                >
                  <Image
                    src="/gallery-icon.svg"
                    alt="gallery"
                    width={136}
                    height={136}
                    className="transition-transform duration-150 hover:scale-[1.08]"
                  />
                </button>

                <Image
                  src="/shutter-line.svg"
                  alt=""
                  width={85}
                  height={85}
                  className="absolute -bottom-10 -left-20 rotate-180"
                />

                <p className="absolute -bottom-18 -left-42 w-55 text-sm font-medium leading-6">
                  ALLOW A.I.
                  <br />
                  ACCESS GALLERY
                </p>
              </div>
            </div>
          </div>
        )}

        <BackButton />
      </section>

      <AllowModal
        isOpen={!!modalType}
        onClose={() => setModalType(null)}
        title={
          modalType === "camera"
            ? "Allow A.I. to scan your face"
            : "Allow A.I. access gallery"
        }
        description={
          modalType === "camera"
            ? "This will request access to your camera."
            : "This will let you choose an image from your device."
        }
        onAllow={handleAllow}
      />
    </>
  );
}
