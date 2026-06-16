import Image from "next/image";

export default function AIConfidence({ data }) {
  return (
    <div className="bg-[#F3F3F3] text-center h-full">
      <div className="font-semibold mb-4 border-t py-3">
        {data.confidenceTitle}
      </div>

      {data.results.map((item) => (
        <div key={item.label} className="flex justify-between px-3 pb-4">
           <div className="flex items-center gap-2">
                    <Image
                src="/radio-button.svg"
                alt=""
                width={16}
                height={16}
                /> 
                <span>{item.label.toUpperCase()}</span>
                </div>
          <span>{item.percent}%</span>
        </div>
      ))}
    </div>
  );
}