import Image from "next/image";

const ColorSimilarityResults = () => {
  return (
    <div className="container mx-auto my-6 p-4">
      <div className="grid grid-cols-1 gap-8">
        <Image
          src="/experiments/result-abc.png"
          alt="Red Color Image"
          width={1000}
          height={100}
        />
        <Image
          src="/experiments/result-ab.png"
          alt="Green Color Image"
          width={700}
          height={100}
        />
        <Image
          src="/experiments/result-cd.png"
          alt="Blue Color Image"
          width={700}
          height={100}
        />
      </div>
    </div>
  );
};

export default ColorSimilarityResults;
