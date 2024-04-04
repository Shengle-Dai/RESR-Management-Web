import IntroParagraph from "@/components/IntroParagraph";
import Section from "@/components/Section";

const MagneticMaterialsPage = () => {
  return (
    <>
      <IntroParagraph
        title="Magnetic Materials"
        description="Magnetic materials are substances that exhibit notable magnetic properties. The fundamental characteristic of these materials is their ability to be influenced by external magnetic fields and, in many cases, to retain a magnetic field of their own. The study of magnetic materials is a critical part of material science, physics, and engineering, with a range of applications across various fields."
      />
      <div className="flex flex-row min-h-screen px-10 py-6 gap-x-6">
        <div className="w-1/2">
          {/* Left side content */}
          <Section
            title="Including Rare Earth"
            description="Select and click the coating category that you want to explore, and see the details about it."
          >
            <div className="grid grid-cols gap-x-10 gap-y-2.5"></div>
          </Section>
        </div>

        <div className="w-1/2">
          {/* Right side content */}
          <Section
            title="Not Including Rare Earth"
            description="Select and click the coating category that you want to explore, and see the details about it."
          >
            <div className="grid grid-cols gap-x-10 gap-y-2.5"></div>
          </Section>
        </div>
      </div>
    </>
  );
};

export default MagneticMaterialsPage;
