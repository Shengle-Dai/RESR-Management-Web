"use client";

import React from "react";
import IntroParagraph from "@/components/IntroParagraph";
import ColorRecognitionGraphs from "@/components/ColorRecognitionGraphs";
import ExperimentSection from "@/components/ExperimentSection";

const CoatingsPage = () => {
  return (
    <>
      <IntroParagraph
        title="Experiments"
        description="Experiments play a crucial role in the field of chemistry, serving as a fundamental pillar alongside theory. They provide the practical evidence and experience needed to support and advance chemical science."
      />
      <div className="flex flex-col min-h-screen px-10 py-6 gap-y-[30px]">
        <ExperimentSection
          title="Color Recognition Experiment"
          description="The color recognition experiment is designed to test the ability of participants to recognize and differentiate between different colors. The experiment involves presenting participants with a series of color swatches and asking them to identify the color. The results of the experiment can provide valuable insights into color perception and cognition."
        >
          <ColorRecognitionGraphs />
        </ExperimentSection>
      </div>
    </>
  );
};

export default CoatingsPage;
