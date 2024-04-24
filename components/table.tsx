import React from "react";
import { TableCell } from "@/utils/definitions";
import { useState } from "react";

type TableProps = {
  headers: Array<TableCell>;
  data: Array<Array<TableCell>>;
  orientation: "row" | "column";
  pageSize?: number;
};

const Table: React.FC<TableProps> = ({
  headers,
  data,
  orientation,
  pageSize = 10,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);

  const currentData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const renderCell = (
    cell: { value: React.ReactNode; highlight?: boolean },
    isHeader = false
  ) => {
    const baseStyle = "border px-2 py-1";
    const highlightStyle = "bg-yellow-200";
    const headerColor = "bg-gray-100";
    const textStyle = "text-center";

    const style = `${baseStyle} ${textStyle} ${
      cell.highlight ? highlightStyle : ""
    } ${isHeader ? headerColor : ""}`;

    if (isHeader) {
      return <th className={style}>{cell.value}</th>;
    }
    return <td className={style}>{cell.value}</td>;
  };

  const renderRowMajor = () => (
    <>
      <thead>
        <tr>{headers.map((header, index) => renderCell(header, true))}</tr>
      </thead>
      <tbody>
        {currentData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => renderCell(cell))}
          </tr>
        ))}
      </tbody>
    </>
  );

  const renderColumnMajor = () => (
    <tbody>
      {headers.map((header, headerIndex) => (
        <tr key={headerIndex}>
          {renderCell(header, true)}
          {currentData.map((row, rowIndex) => renderCell(row[headerIndex]))}
        </tr>
      ))}
    </tbody>
  );
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          {orientation === "row" ? renderRowMajor() : renderColumnMajor()}
        </table>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-between pt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
