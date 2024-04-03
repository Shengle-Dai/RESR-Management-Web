import React from "react";

interface SectionProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, description, children }) => {
  return (
    <section className="px-4 md:px-5 lg:px-6">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-md text-gray-600 mt-2 mb-4">{description}</p>
      {children}
    </section>
  );
};

export default Section;
