import React from "react";

const ShapeBox = ({ name }: { name: string }) => {
  return (
    <div className="border border-gray-300 hover:border-blue-500 shadow-sm hover:shadow-md rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer">
      <div className="p-4 bg-white hover:bg-blue-100">
        <p className="text-center text-lg font-semibold text-gray-700 hover:text-blue-600">
          {name}
        </p>
      </div>
    </div>
  );
};

export default ShapeBox;
