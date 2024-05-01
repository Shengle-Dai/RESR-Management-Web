"use client";

import IntroParagraph from "@/components/IntroParagraph";
import Section from "@/components/Section";
import React, { useState, useEffect, useCallback } from "react";
import { MaterialCategory, Material } from "@/utils/definitions";
import Box from "@/components/box";
import {
  fetchAllMaterialCategories,
  fetchMaterialCategoryDetails,
} from "@/utils/data";
import { TableCell } from "@/utils/definitions";
import Table from "@/components/table";

const headers: TableCell[] = [
  { value: "Grade" },
  { value: "Br (T)" },
  { value: "Hcb (kA/m)" },
  { value: "BH Max (kJ/m3)" },
];

const MagneticMaterialsPage = () => {
  const [materialCategories, setMaterialCategories] = useState<
    MaterialCategory[]
  >([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [selectedCategoryMaterials, setSelectedCategoryMaterials] = useState<
    Material[] | null
  >(null);
  const [selectedMaterials, setSelectedMaterials] = useState<
    Array<Array<TableCell>>
  >([]);

  useEffect(() => {
    // Fetch all material categories
    fetchAllMaterialCategories()
      .then((data) => {
        setMaterialCategories(data);
      })
      .catch((error) =>
        console.error("Error fetching material categories:", error)
      );
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      // Fetch details for a specific material category
      fetchMaterialCategoryDetails(selectedCategoryId)
        .then((details) => {
          if (details && details.materials) {
            setSelectedCategoryMaterials(details.materials);
          }
        })
        .catch((error) =>
          console.error(
            `Error fetching details for material category ${selectedCategoryId}:`,
            error
          )
        );
    }
  }, [selectedCategoryId]);

  const handleCategoryClick = useCallback((categoryId: number) => {
    fetchMaterialCategoryDetails(categoryId)
      .then((details) => {
        if (details && details.materials) {
          // Convert materials to table cells
          const tableData = details.materials.map((material: Material) => [
            { value: material.grade },
            { value: material.br_t },
            { value: material.hcb_kA_m },
            { value: material.bh_max_kj_m3 },
          ]);

          setSelectedMaterials(tableData);
          // ... set other category details
        }
      })
      .catch((error) => {
        console.error(
          `Error fetching details for material category ${categoryId}:`,
          error
        );
      });
  }, []);

  const rareEarthMaterials = materialCategories.filter(
    (category) => category.is_rare_earth
  );
  const nonRareEarthMaterials = materialCategories.filter(
    (category) => !category.is_rare_earth
  );

  return (
    <>
      <IntroParagraph
        title="Magnetic Materials"
        description="Magnetic materials are substances that exhibit notable magnetic properties. The fundamental characteristic of these materials is their ability to be influenced by external magnetic fields and, in many cases, to retain a magnetic field of their own. The study of magnetic materials is a critical part of material science, physics, and engineering, with a range of applications across various fields."
      />
      <div className="flex flex-col">
        <div className="flex flex-row px-10 py-6 gap-x-6">
          <div className="w-1/2">
            <Section
              title="Including Rare Earth"
              description="Select and click the material category that you want to explore, and see the details about it."
            >
              <div className="grid grid-cols gap-x-10 gap-y-2.5">
                {rareEarthMaterials.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className="cursor-pointer"
                  >
                    <Box name={category.name} />
                  </div>
                ))}
              </div>
            </Section>
          </div>

          <div className="w-1/2">
            <Section
              title="Not Including Rare Earth"
              description="Select and click the material category that you want to explore, and see the details about it."
            >
              <div className="grid grid-cols gap-x-10 gap-y-2.5">
                {nonRareEarthMaterials.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className="cursor-pointer"
                  >
                    <Box name={category.name} />
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
        {selectedMaterials.length > 0 && (
          <Table headers={headers} data={selectedMaterials} orientation="row" />
        )}
      </div>
    </>
  );
};

export default MagneticMaterialsPage;
