"use client";

import React, { useState, useEffect } from "react";
import { Shape, ImageData } from "@/utils/definitions";
import Box from "@/components/box";
import { fetchAllShapes, fetchShapeDetails } from "@/utils/data";
import Image from "next/image";
import { toBlobURL } from "@/utils/image";
import IntroParagraph from "@/components/IntroParagraph";
import Section from "@/components/Section";

const ShapesPage = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [selectedShapeId, setSelectedShapeId] = useState<number | null>(null);
  const [galleryImages, setGalleryImages] = useState<ImageData[]>([]);

  useEffect(() => {
    fetchAllShapes()
      .then((data) => setShapes(data))
      .catch((error) => console.error("Error fetching shapes:", error));
  }, []);

  useEffect(() => {
    if (selectedShapeId) {
      fetchShapeDetails(selectedShapeId)
        .then((details) => {
          if (details && details.images) {
            setGalleryImages(details.images);
          }
        })
        .catch((error) =>
          console.error(
            `Error fetching details for shape ${selectedShapeId}:`,
            error
          )
        );
    }
  }, [selectedShapeId]);

  return (
    <>
      <IntroParagraph
        title="Magnetic Product Shapes"
        description="In the realm of magnetic products, the shape plays a crucial role in determining the magnetic field distribution and its strength. Each shape affects the magnetic field and is selected based on the specific application and required magnetic field characteristics."
      />
      <div className="flex flex-col min-h-screen px-10 py-6 gap-y-[30px]">
        <Section
          title="All Product Shapes"
          description="Select and click the coating category that you want to explore, and see the details about it."
        >
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            {shapes.map((shape) => (
              <div key={shape.id} onClick={() => setSelectedShapeId(shape.id)}>
                <Box name={shape.name} />
              </div>
            ))}
          </div>
        </Section>

        {selectedShapeId && galleryImages.length > 0 && (
          <Section
            title="Shape Sample Images"
            description="View the sample images of shapes. Scroll right to see more."
          >
            <div className="gallery-container">
              {galleryImages.map((image) => (
                <Image
                  key={image.id}
                  src={toBlobURL(`data:image/png;base64,${image.base64_data}`)}
                  alt="Shape Image"
                  height={300}
                  width={300}
                />
              ))}
            </div>
          </Section>
        )}
      </div>
    </>
  );
};

export default ShapesPage;
