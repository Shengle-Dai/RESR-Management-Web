import CASLogo from "@/components/Globe-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/components/fonts";
import Image from "next/image";
import Card from "@/components/card";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen px-10 py-6 gap-y-2.5">
      <div className="mb-6">
        {" "}
        {/* Add margin bottom for spacing */}
        <p
          className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
        >
          <strong>Welcome to RESR Management System.</strong> This is the manage
          system for the Rare Earth Secondary Resources database.
        </p>
      </div>
      <div className="w-full px-[100px] justify-center">
        {" "}
        <Card
          title="Magnetic Materials"
          description="Magnetic materials are materials that can be magnetized or attracted to a magnet. These materials are typically classified based on their magnetic properties, which arise from the magnetic moments of their atoms."
          imageUrl="/magnetic-material.png"
          imageWidth={600}
          imageHeight={400}
          href="/magnetic-materials"
        >
          {/* Additional content can be added here */}
        </Card>
      </div>
      <div className="w-full px-[100px] justify-center">
        {" "}
        <Card
          title="Shapes"
          description="Magnetic materials can be formed into various shapes depending on their intended application. The shape of a magnetic material can significantly influence its magnetic properties and effectiveness in different uses."
          imageUrl="/shape.png"
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
          imageUrl="/coating.png"
          imageWidth={600}
          imageHeight={400}
          href="/coatings"
        ></Card>
      </div>
    </main>
  );
}
