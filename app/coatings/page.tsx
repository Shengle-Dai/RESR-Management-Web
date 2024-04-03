"use client";

import React, { useState, useEffect } from "react";
import { CoatingCategory, Coating, ImageData } from "@/utils/definitions";
import Box from "@/components/box";
import {
  fetchAllCoatingCategories,
  fetchCoatingCategoryDetails,
} from "@/utils/data";
import Image from "next/image";
import { toBlobURL } from "@/utils/image";
import IntroParagraph from "@/components/IntroParagraph";
import CoatingDetails from "@/components/CoatingDetails";
import Section from "@/components/Section";

const CoatingsPage = () => {
  const [coatingCategories, setCoatingCategories] = useState<CoatingCategory[]>(
    []
  );
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [galleryImages, setGalleryImages] = useState<ImageData[]>([]);
  const [selectedCategoryCoatings, setSelectedCategoryCoatings] = useState<
    Coating[] | null
  >(null);

  useEffect(() => {
    // Fetch all coating categories
    fetchAllCoatingCategories()
      .then((data) => {
        console.log(data);
        setCoatingCategories(data);
      })
      .catch((error) =>
        console.error("Error fetching coating categories:", error)
      );
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      // Fetch details for a specific coating category
      fetchCoatingCategoryDetails(selectedCategoryId)
        .then((details) => {
          if (details && details.images) {
            setGalleryImages(details.images);
          }
          if (details && details.coatings) {
            setSelectedCategoryCoatings(details.coatings);
          }
        })
        .catch((error) =>
          console.error(
            `Error fetching details for coating category ${selectedCategoryId}:`,
            error
          )
        );
    }
  }, [selectedCategoryId]);

  return (
    <>
      <IntroParagraph
        title="Metal Coatings"
        description="Metal coatings are applied to surfaces for various reasons, including protection, aesthetics, and functional enhancements. These coatings can be broadly classified based on their application methods and the desired properties they impart."
      />
      <div className="flex flex-col min-h-screen px-10 py-6 gap-y-[30px]">
        <Section
          title="All Coating Categories"
          description="Select and click the coating category that you want to explore, and see the details about it."
        >
          <div className="grid grid-cols-2 gap-x-10 gap-y-2.5">
            {coatingCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategoryId(category.id)}
              >
                <Box name={category.name} />
              </div>
            ))}
          </div>
        </Section>

        {/* Coatings Details Section */}
        {selectedCategoryId && selectedCategoryCoatings && (
          <Section
            title="Coatings Details"
            description="Explore the coatings in this category."
          >
            {selectedCategoryCoatings.map((coating) => (
              <CoatingDetails key={coating.id} coating={coating} />
            ))}
          </Section>
        )}

        {/* Gallery Images Section */}
        {selectedCategoryId && galleryImages.length > 0 && (
          <Section
            title="Coating Sample Images"
            description="View the sample images of coatings in this category. Scroll right to see more."
          >
            <div className="gallery-container">
              {galleryImages.map((image) => (
                <Image
                  key={image.id}
                  src={toBlobURL(`data:image/png;base64,${image.base64_data}`)}
                  alt="Coating Image"
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

export default CoatingsPage;
