import React, { useState, useEffect, useMemo } from "react";
import { Shape, ShapeImage } from "@/utils/definitions";
import Image from "next/image";
import { fetchShapeDetails } from "@/utils/data";

interface ShapeBoxProps {
  shape: Shape;
}

const toBlobURL = (base64: string, mimeType: string = "image/png"): string => {
  const byteString = atob(base64.split(",")[1]);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const intArray = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([intArray], { type: mimeType });
  return URL.createObjectURL(blob);
};

const ShapeBox = ({ shape }: ShapeBoxProps) => {
  const [hover, setHover] = useState(false);
  const [images, setImages] = useState<ShapeImage[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      if (hover && images.length === 0) {
        try {
          const fetchedDetails = await fetchShapeDetails(shape.id);
          if (fetchedDetails && fetchedDetails.images) {
            setImages(fetchedDetails.images);
          }
        } catch (error) {
          console.error(`Error fetching details for shape ${shape.id}:`, error);
        }
      }
    };

    loadImages();
  }, [hover, shape.id]);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="border p-4 cursor-pointer"
    >
      <p>{shape.name}</p>
      {hover && images.length > 0 && (
        <div className="gallery-container">
          {images.map((image) => (
            <Image
              key={image.id}
              src={toBlobURL(`data:image/png;base64,${image.base64_data}`)}
              alt={shape.name}
              height={300} // Fixed height
              width={300} // Width will be automatically adjusted
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShapeBox;
