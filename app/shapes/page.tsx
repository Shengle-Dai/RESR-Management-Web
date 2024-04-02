"use client";

import React, { useState, useEffect } from "react";
import { Shape } from "@/utils/definitions";
import ShapeBox from "@/components/shape/ShapeBox";
import { fetchAllShapes, fetchShapeDetails } from "@/utils/data";

const ShapesPage = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    fetchAllShapes()
      .then((data) => {
        console.log("Fetched shapes:", data); // Log to check data
        setShapes(data);
      })
      .catch((error) => console.error("Error fetching shapes:", error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {shapes.map((shape) => (
        <ShapeBox key={shape.id} shape={shape} />
      ))}
    </div>
  );
};

export default ShapesPage;
