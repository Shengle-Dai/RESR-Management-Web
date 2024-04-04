import Image from "next/image";

const ColorRecognitionGraphs = () => {
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
          <div className="flex items-center justify-center h-full">
            <div className="overflow-x-auto bg-white p-4 shadow rounded-lg">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="border px-3 py-2 text-center">光照强度</th>
                    <th className="border px-3 py-2">15.1</th>
                    <th className="border px-3 py-2 bg-yellow-200">25.1</th>
                    <th className="border px-3 py-2">47.2</th>
                    <th className="border px-3 py-2">53.8</th>
                    <th className="border px-3 py-2">63.4</th>
                    <th className="border px-3 py-2">73.6</th>
                    <th className="border px-3 py-2">85.0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 text-center">标准差</td>
                    <td className="border px-3 py-2">67.6</td>
                    <th className="border px-3 py-2 bg-yellow-300">67.8</th>
                    <td className="border px-3 py-2">9.2</td>
                    <td className="border px-3 py-2">15.7</td>
                    <td className="border px-3 py-2">23.1</td>
                    <td className="border px-3 py-2">25.4</td>
                    <td className="border px-3 py-2">19.4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorRecognitionGraphs;
