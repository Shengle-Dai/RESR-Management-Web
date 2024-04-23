import React from "react";
import { TableCell } from "@/utils/definitions";

type TableProps = {
  headers: Array<TableCell>;
  data: Array<Array<TableCell>>;
  orientation: "row" | "column";
};

const Table: React.FC<TableProps> = ({ headers, data, orientation }) => {
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
        {data.map((row, rowIndex) => (
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
          {data.map((row, rowIndex) => renderCell(row[headerIndex]))}
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="flex items-center justify-center h-full">
      <div className="overflow-x-auto bg-white p-4 shadow rounded-lg">
        <table className="min-w-full leading-normal">
          {orientation === "row" ? renderRowMajor() : renderColumnMajor()}
        </table>
      </div>
    </div>
  );
};

export default Table;
