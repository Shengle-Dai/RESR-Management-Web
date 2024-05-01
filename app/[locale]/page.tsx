"use client";

import { useEffect, useState } from "react";
import Card from "@/components/card";
import IntroParagraph from "@/components/IntroParagraph";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

type TranslationFunction = (key: string, ...args: any[]) => string;
const i18nNamespaces = ["home"];

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const [t, setT] = useState<TranslationFunction | null>(null);
  useEffect(() => {
    initTranslations(locale, i18nNamespaces)
      .then((result) => {
        setT(() => result.t);
      })
      .catch((error) => {
        console.error("Failed to initialize translations:", error);
      });
  }, [locale]);

  if (!t) {
    return <p>Loading translations...</p>;
  }

  return (
    <TranslationsProvider locale="en" namespaces={i18nNamespaces}>
      <IntroParagraph
        title={t("welcome")}
        description="This is the manage system for the Rare Earth Secondary Resources database"
      />

      <div className="w-full px-[100px] justify-center">
        {" "}
        <Card
          title="Magnetic Materials"
          description="Magnetic materials are materials that can be magnetized or attracted to a magnet. These materials are typically classified based on their magnetic properties, which arise from the magnetic moments of their atoms."
          imageUrl="/homepage/magnetic-materials.png"
          imageWidth={600}
          imageHeight={400}
          href="/magnetic-materials"
        ></Card>
      </div>
      <div className="w-full px-[100px] justify-center">
        {" "}
        <Card
          title="Shapes"
          description="Magnetic materials can be formed into various shapes depending on their intended application. The shape of a magnetic material can significantly influence its magnetic properties and effectiveness in different uses."
          imageUrl="/homepage/shapes.png"
          imageWidth={600}
          imageHeight={400}
          href="/shapes"
        ></Card>
      </div>
      <div className="w-full px-[100px] justify-center">
        {" "}
        <Card
          title="Coatings"
          description="Metal coating is a process used to deposit a layer of one metal onto the surface of another, either to enhance the appearance or to impart other beneficial properties to the base material."
          imageUrl="/homepage/coatings.png"
          imageWidth={600}
          imageHeight={400}
          href="/coatings"
        ></Card>
      </div>
      <div className="w-full px-[100px] justify-center">
        {" "}
        <Card
          title="Experiments"
          description="Metal coating is a process used to deposit a layer of one metal onto the surface of another, either to enhance the appearance or to impart other beneficial properties to the base material."
          imageUrl="/homepage/experiments.png"
          imageWidth={600}
          imageHeight={400}
          href="/experiments"
        ></Card>
      </div>
    </TranslationsProvider>
  );
}
