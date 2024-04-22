import Image from "next/image";
import Table from "./table";

const ColorRecognition = () => {
  const tableHeaders = [{ value: "光照强度" }, { value: "标准差" }];
  const tableData = [
    [{ value: "15.1" }, { value: "67.6" }],
    [
      { value: "25.1", highlight: true }, // Highlighted cell
      { value: "67.8", highlight: true }, // Highlighted cell
    ],
    [{ value: "47.2" }, { value: "9.2" }],
    [{ value: "53.8" }, { value: "15.7" }],
    [{ value: "63.4" }, { value: "23.1" }],
    [{ value: "73.6" }, { value: "25.4" }],
    [{ value: "85.0" }, { value: "19.4" }],
  ];
  return (
    <div className="container mx-auto my-6 p-4">
      <div className="grid grid-cols-4 grid-rows-2 grid-flow-row gap-4">
        <Image
          src="/experiments/R.png"
          alt="Red Color Image"
          width={300}
          height={300}
        />
        <Image
          src="/experiments/G.png"
          alt="Green Color Image"
          width={300}
          height={300}
        />
        <Image
          src="/experiments/25.1.png"
          alt="Blue Color Image"
          width={300}
          height={300}
        />
        <Image
          src="/experiments/53.8.png"
          alt="Gray Color Image"
          width={300}
          height={300}
        />

        {/* Second row of images */}
        <Image
          src="/experiments/B.png"
          alt="Red Color Image"
          width={300}
          height={300}
        />

        <Image
          src="/experiments/gray.png"
          alt="Green Color Image"
          width={300}
          height={300}
        />

        <div className="col-span-2">
          <Table headers={tableHeaders} data={tableData} orientation="column" />
        </div>
      </div>
    </div>
  );
};

export default ColorRecognition;
