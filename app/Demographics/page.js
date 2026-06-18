"use client";

import BackButton from "../components/BackButton/BackButton";
import Progress from "../components/Progress/Progress";
import Navbar from "../Navbar/page";
import AIConfidence from "../components/AIConfidence/AIConfidence";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Demographics() {
  const router = useRouter();

  const [overrides, setOverrides] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("sex");

  const [apiData] = useState(() => {
    if (typeof window === "undefined") return null;

    const savedResults = JSON.parse(localStorage.getItem("skinstric_results"));

    return savedResults?.data || null;
  });

  if (!apiData) {
    return (
      <>
        <Navbar />
        <div className="p-6">Loading demographics...</div>
      </>
    );
  }

  const demographicsData = {
    race: {
      title: Object.entries(apiData.race).sort((a, b) => b[1] - a[1])[0][0],
      confidenceTitle: "Race A.I Confidence",
      results: Object.entries(apiData.race)
        .sort((a, b) => b[1] - a[1])
        .map(([label, value]) => ({
          label,
          percent: Math.round(value * 100),
        })),
    },

    age: {
      title: Object.entries(apiData.age).sort((a, b) => b[1] - a[1])[0][0],
      confidenceTitle: "Age A.I Confidence",
      results: Object.entries(apiData.age)
        .sort((a, b) => b[1] - a[1])
        .map(([label, value]) => ({
          label,
          percent: Math.round(value * 100),
        })),
    },

    sex: {
      title: Object.entries(apiData.gender).sort((a, b) => b[1] - a[1])[0][0],
      confidenceTitle: "Sex A.I Confidence",
      results: Object.entries(apiData.gender)
        .sort((a, b) => b[1] - a[1])
        .map(([label, value]) => ({
          label,
          percent: Math.round(value * 100),
        })),
    },
  };

  const selectedData = demographicsData[selectedCategory];
  const selectedTitle = overrides[selectedCategory] || selectedData.title;

  return (
    <>
      <Navbar />

      <section className="relative min-h-[calc(100vh-64px)] overflow-y-auto flex flex-col px-4 sm:px-6 pb-32">
        <p className="text-[16px] leading-6 tracking-[-0.02em] font-semibold text-[#1A1B1C]">
          A.I ANALYSIS
        </p>

        <h3 className="text-[42px] sm:text-[56px] lg:text-[72px] leading-none tracking-[-0.02em] font-normal text-[#1A1B1C]">
          DEMOGRAPHICS
        </h3>

        <p className="text-[14px] leading-9 tracking-[-0.02em] font-normal text-[#1A1B1C]">
          PREDICTED RACE & AGE
        </p>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[220px_minmax(0,1fr)_320px]
            gap-4
            w-full
            max-w-[1200px]
            mx-auto
            pt-8
            lg:pt-20
          "
        >
          <div className="flex flex-col sm:flex-row lg:flex-col w-full lg:w-52 gap-2">
            <button
              onClick={() => setSelectedCategory("race")}
              className={`
                h-24
                sm:h-28
                lg:h-26
                flex-1
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
              <p className="text-[14px] uppercase">
                {overrides.race || demographicsData.race.title}
              </p>
              <p className="text-[14px] uppercase">Race</p>
            </button>

            <button
              onClick={() => setSelectedCategory("age")}
              className={`
                h-24
                sm:h-28
                lg:h-26
                flex-1
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
              <p className="text-[14px] uppercase">
                {overrides.age || demographicsData.age.title}
              </p>
              <p className="text-[14px] uppercase">Age</p>
            </button>

            <button
              onClick={() => setSelectedCategory("sex")}
              className={`
                h-24
                sm:h-28
                lg:h-26
                flex-1
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
              <p className="text-[14px] uppercase">
                {overrides.sex || demographicsData.sex.title}
              </p>
              <p className="text-[14px] uppercase">Sex</p>
            </button>
          </div>

          <div className="relative bg-[#F3F3F3] min-h-[360px] sm:min-h-[440px] lg:h-110">
            <div className="text-[36px] sm:text-[48px] lg:text-[40px] leading-none ml-4 sm:ml-8 pt-6 sm:pt-8 uppercase break-words">
              {selectedTitle}
            </div>

            <div className="absolute bottom-4 right-4">
              <Progress percent={selectedData.results[0].percent} />
            </div>
          </div>

          <AIConfidence
            data={selectedData}
            onSelect={(label) =>
              setOverrides((prev) => ({
                ...prev,
                [selectedCategory]: label,
              }))
            }
          />
        </div>

        <div className="fixed bottom-6 left-4 right-4 flex justify-between items-center z-50">
          <BackButton />

          <button
            onClick={() => router.push("/Introduce")}
            className="border h-12 w-18 font-semibold text-[#1A1B1C] hover:bg-[#E1E1E2]"
          >
            RESET
          </button>
        </div>
      </section>
    </>
  );
}