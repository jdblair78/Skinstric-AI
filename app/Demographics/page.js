"use client";

import { useState } from "react";
import BackButton from "../components/BackButton/page";
import Progress from "../components/Progress/page";
import Navbar from "../Navbar/page";
import AIConfidence from "../components/AIConfidence/page";
import { useRouter } from "next/navigation";

export default function Demographics() {
    const router = useRouter();

    const [selectedCategory, setSelectedCategory] = useState("sex");
    
    const demographicsData = {
        race: {
            title: "East Asian",
            confidenceTitle: "Race A.I Confidence",
            results: [
                { label: "East Asian", percent: 67 },
                { label: "White", percent: 18 },
                { label: "Black", percent: 10 },
                { label: "Latino", percent: 5 },
            ],
        },
        age: {
            title: "20-29",
            confidenceTitle: "Age A.I Confidence",
            results: [
                { label: "20-29", percent: 82 },
                { label: "30-39", percent: 12 },
                { label: "40-49", percent: 6 },
            ],
        },
        sex: {
            title: "Female",
            confidenceTitle: "Sex A.I Confidence",
            results: [
                { label: "Female", percent: 71 },
                { label: "Male", percent: 28 },
            ],
        },
    };
    
    const selectedData = demographicsData[selectedCategory];

  return (
    <>
      <Navbar />

      <section className="relative h-[calc(100vh-64px)] overflow-hidden flex flex-col px-6">
        <p className="text-[16px] leading-6 tracking-[-0.02em] font-semibold text-[#1A1B1C]">
          A.I ANALYSIS
        </p>

        <h3 className="text-[72px] leading-none tracking-[-0.02em] font-normal text-[#1A1B1C]">
          DEMOGRAPHICS
        </h3>

        <p className="text-[14px] leading-9 tracking-[-0.02em] font-normal text-[#1A1B1C]">
          PREDICTED RACE & AGE
        </p>

        <div className="grid md:grid-cols-[.5fr_3fr_1fr] gap-4 mt-10 h-100">
          <div className="flex flex-col w-52 gap-2">
            <button
              onClick={() => setSelectedCategory("race")}
              className={`
      h-26
      px-4
      py-3
      border-t
      text-left
      flex
      flex-col
      justify-between
      font-semibold
      transition-colors
      ${
        selectedCategory === "race"
          ? "bg-[#1A1B1C] text-[#FCFCFC]"
          : "bg-[#F3F3F4] text-[#1A1B1C]"
      }
    `}
            >
              <p className="text-[14px] uppercase">East Asian</p>
              <p className="text-[14px] uppercase">Race</p>
            </button>

            <button
              onClick={() => setSelectedCategory("age")}
              className={`
      h-26
      px-4
      py-3
      border-t
      text-left
      flex
      flex-col
      justify-between
      font-semibold
      transition-colors
      ${
        selectedCategory === "age"
          ? "bg-[#1A1B1C] text-[#FCFCFC]"
          : "bg-[#F3F3F4] text-[#1A1B1C]"
      }
    `}
            >
              <p className="text-[14px] uppercase">20-29</p>
              <p className="text-[14px] uppercase">Age</p>
            </button>

            <button
              onClick={() => setSelectedCategory("sex")}
              className={`
      h-26
      px-4
      py-3
      border-t
      text-left
      flex
      flex-col
      justify-between
      font-semibold
      transition-colors
      ${
        selectedCategory === "sex"
          ? "bg-[#1A1B1C] text-[#FCFCFC]"
          : "bg-[#F3F3F4] text-[#1A1B1C]"
      }
    `}
            >
              <p className="text-[14px] uppercase">Female</p>
              <p className="text-[14px] uppercase">Sex</p>
            </button>
          </div>

          <div className="relative bg-[#F3F3F3] h-110">
            <div className="text-[40px] leading-10 ml-8 pt-8">
                
         
                {selectedData.title}</div>

            <div className="absolute bottom-4 right-4">
              <Progress percent={selectedData.results[0].percent} />
            </div>
          </div>
            <AIConfidence data={selectedData} />
        </div>

          <BackButton />
          <button
          onClick={() => router.push("/Introduce")} className="absolute  bottom-24 right-8 border h-12 w-18 font-semibold color-[#1A1B1C] hover:bg-[#E1E1E2]">RESET</button>
      </section>
    </>
  );
}
