import React, { useState } from "react";
import ColorRecognitionGraphs from "./ColorRecognition";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface SectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ExperimentSection: React.FC<SectionProps> = ({
  title,
  description,
  children,
}) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => setShowDetail(!showDetail);

  return (
    <section className="px-4 md:px-5 lg:px-6">
      <div
        className="flex items-center cursor-pointer text-gray-800 hover:text-gray-600"
        onClick={toggleDetail}
      >
        <h2 className="text-2xl font-semibold">{title}</h2>
        {showDetail ? (
          <ChevronUpIcon className="ml-2 w-5 h-5" />
        ) : (
          <ChevronDownIcon className="ml-2 w-5 h-5" />
        )}
      </div>
      <p className="text-md text-gray-600 mt-2">{description}</p>
      {showDetail && <div className="mt-4">{children}</div>}
    </section>
  );
};

export default ExperimentSection;
