import React from "react";
import { Coating } from "@/utils/definitions"; // adjust the import path as necessary

interface CoatingDetailsProps {
  coating: Coating;
}

const CoatingDetails: React.FC<CoatingDetailsProps> = ({ coating }) => {
  return (
    <div className="coating-detail">
      <h3>Subcategory: {coating.sub_category}</h3>
      <p>Thickness: {coating.thickness}</p>
      <p>Color: {coating.color}</p>
    </div>
  );
};

export default CoatingDetails;
