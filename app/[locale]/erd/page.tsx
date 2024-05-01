"use client";

import React from "react";
import IntroParagraph from "@/components/IntroParagraph";
import Image from "next/image";

const CoatingsPage = () => {
  return (
    <>
      <IntroParagraph
        title="RESR Management Platform ERD"
        description="The ERD for the RESR Management Platform is shown below. The platform is designed to manage the data and resources of the RESR research group."
      />
      <div className="flex justify-center items-center">
        <Image
          alt="RESR Management Platform ERD"
          src="/erd/ERD.png"
          width={1200}
          height={800}
        />
      </div>
    </>
  );
};

export default CoatingsPage;
