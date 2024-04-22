import Table from "./table";
import React, { useState, useEffect } from "react";
import { fetchExcelData } from "@/utils/data";
import { TableCell } from "@/utils/definitions";

const ColorSimilarityMethods = () => {
  const [tableHeaders, setTableHeaders] = useState<TableCell[]>([]);
  const [tableData, setTableData] = useState<Array<TableCell[]>>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExcelData("/experiments/excel1.xlsx")
      .then(({ headers, data }) => {
        setTableHeaders(headers);
        setTableData(data);
      })
      .catch((err) => {
        console.error("Failed to load Excel data:", err);
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <p style={{ marginBottom: "20px" }}>
        通过限定环境要素来观察颜色相近镀层的反射能力强弱,
        两个材料由于表面粗糙度不同, 不同环境下灰度值的差值不同,
        根据反射能力大小对他们所占的比重进行拟合放大倍数的选取,
        最终确定建模线阈值S1. 然后选定一种灰度值与光强拟合程度好的材料,
        将灰度值进一步拟合放大, 最终确定模拟阈值公式S2, 当待测物光强x、灰度值y,
        z的数据带入阈值公式S2, 若S2接近0, 即为选定的镀层材料; 若S2接近S1,
        即为另一种镀层材料.
        <br />
        <br />
        不同镀层在图像分析灰度值后, 差异包括三个方向:
        <br />
        ①黑背景板, 镀锌和镀镍的差异; A, A=a1-a2;
        <br />
        ②白背景板, 镀锌和镀镍的差异; B, B=b1-b2;
        <br />
        ③不同材料, 黑白背景板差值的差异. C, C=(b2-a2)-(b1-a1)
        <br />
        <br />
        各镀层的差异值, 即阈值S为: 𝑆=𝛼𝐴+𝛽𝛣+𝛾𝐶.
        <br />
        𝛼是黑背景下, 镀锌和镀镍差异的放大系数;
        <br />
        𝛽是白背景下, 镀锌和镀镍差异的放大系数;
        <br />
        𝛾是不同材料, 黑白背景板差值差异的放大系数.
      </p>
      <Table headers={tableHeaders} data={tableData} orientation="row" />
    </div>
  );
};

export default ColorSimilarityMethods;
