"use client";

import React from "react";
import IntroParagraph from "@/components/IntroParagraph";
import ColorRecognition from "@/components/ColorRecognition";
import ColorSimilarityResults from "@/components/ColorSimilarityResults";
import ExperimentSection from "@/components/ExperimentSection";
import ColorSimilarityMethods from "@/components/ColorSimilarityMethods";
import Table from "@/components/table";

const CoatingsPage = () => {
  return (
    <>
      <IntroParagraph
        title="Experiments"
        description="Experiments play a crucial role in the field of chemistry, serving as a fundamental pillar alongside theory. They provide the practical evidence and experience needed to support and advance chemical science."
      />
      <div className="flex flex-col min-h-screen px-10 py-6 gap-y-[50px]">
        <ExperimentSection
          title="Color Recognition Experiment"
          description="The color recognition experiment is designed to test the ability of participants to recognize and differentiate between different colors. The experiment involves presenting participants with a series of color swatches and asking them to identify the color. The results of the experiment can provide valuable insights into color perception and cognition."
        >
          <ColorRecognition />
        </ExperimentSection>

        <ExperimentSection
          title="Color Similarity Experiment Methods"
          description="The color recognition experiment is designed to test the ability of participants to recognize and differentiate between different colors. The experiment involves presenting participants with a series of color swatches and asking them to identify the color. The results of the experiment can provide valuable insights into color perception and cognition."
        >
          <ColorSimilarityMethods />
        </ExperimentSection>

        <ExperimentSection
          title="Color Similarity Experiment Results"
          description="The main goal could be to determine the threshold at which colors are distinguished by the human eye or by computational methods."
        >
          <ColorSimilarityResults />
        </ExperimentSection>
      </div>
    </>
  );
};

export default CoatingsPage;
