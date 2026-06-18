"use client";

import { useEffect, useRef, useState } from "react";

export default function CameraAccess() {
  const videoRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        setError("Camera access denied or unavailable.");
      }
    }

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      {error ? (
        <p className="text-sm text-red-500">{error}</p>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-[420px] h-[420px] object-cover bg-black"
        />
      )}
    </div>
  );
}