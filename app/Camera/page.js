// app/Camera/page.js
"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar/page";
import BackButton from "../components/BackButton/page";
import RotatingRectangleInput from "../components/RotatingRectangleInput/page";

export default function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const [status, setStatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Camera error:", error);
      }
    }

    startCamera();

    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  async function handleTakeSelfie() {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageBase64 = canvas.toDataURL("image/jpeg");

    const existingData =
      JSON.parse(localStorage.getItem("skinstric_phase_one")) || {};

    localStorage.setItem(
      "skinstric_phase_one",
      JSON.stringify({
        ...existingData,
        photo: imageBase64,
      })
    );

    setStatus("processing");

    try {
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

      localStorage.setItem("skinstric_results", JSON.stringify(result));

      setTimeout(() => {
        router.push("/Demographics");
      }, 3000);
    } catch (error) {
      console.error("Phase Two Error:", error);
      setStatus("");
    }
  }

  return (
    <>
      <Navbar />

      <section className="relative h-[calc(100vh-64px)] overflow-hidden flex flex-col px-6">
        <p className="text-[16px] leading-6 tracking-[-0.02em] font-semibold text-[#1A1B1C]">
          TO START ANALYSIS
        </p>

        {status === "processing" ? (
          <div className="flex flex-1 items-center justify-center">
            <RotatingRectangleInput status={status} />
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-6">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-[420px] h-[420px] object-cover bg-black"
            />

            <canvas ref={canvasRef} className="hidden" />

            <button
              onClick={handleTakeSelfie}
              className="border border-[#1A1B1C] px-6 py-3 font-semibold hover:bg-[#E1E1E2]"
            >
              TAKE SELFIE
            </button>
          </div>
        )}

        <BackButton />
      </section>
    </>
  );
}