"use client";

import { useState, useEffect } from "react";
import Navbar from "../Navbar/page";
import BackButton from "../components/BackButton/page";
import RotatingRectangleInput from "../components/RotatingRectangleInput/page";
import Link from "next/link";
import ProceedBtn from "../components/ProceedBtn/page";

export default function Where() {
  const [location, setLocation] = useState("");

  const [status, setStatus] = useState("");

  useEffect(() => {
    localStorage.setItem("skinstric_location", location);
  }, [location]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!location.trim()) return;

    const savedName = localStorage.getItem("skinstric_name");

    if (!savedName) {
      console.log("No name found");
      return;
    }

    setStatus("processing");

    const payload = {
      name: savedName,
      location,
    };

    console.log("Sending:", payload);

    try {
      const res = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) {
        const errorText = await res.text();
        console.log("API Error:", errorText);
        throw new Error(`HTTP ${res.status}`);
      }

      setTimeout(() => {
        setStatus("success");
      }, 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />

      <section className="relative h-[calc(100vh-64px)] overflow-hidden flex flex-col px-6">
        <p className="text-[16px] leading-6 tracking-[-0.02em] font-semibold text-[#1A1B1C]">
          TO START ANALYSIS
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-1 flex-col items-center justify-center gap-3"
        >
          <RotatingRectangleInput
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            status={status}
            placeholder="your city name"
          />
        </form>

        <BackButton />

        {status === "success" && <ProceedBtn />}
      </section>
    </>
  );
}
