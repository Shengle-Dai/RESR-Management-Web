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
      <div className="flex w-full">
        <div className="w-1/3 p-4">
          <p className="break-words whitespace-normal">
            多元回归建模线
            <br />
            S1=29.647𝑥+6204.404
            <br />
            阈值算法
            <br />
            S2=(1/100)×(9.965𝑥²+7337.623𝑥−14.407𝑥𝑦−13.177𝑥𝑧−11443.881𝑦)
            <br />
            识别准确率达100％
          </p>
        </div>
        <div className="w-2/3 p-4">
          <p>
            S1为建模线，当确定光强x时，带入x得S1
            <br />
            S2为模拟阈值，当确定x、y、z时，带入得S2
            <br />
            <br />
            待测物阈值S2在8000-12000，接近S1即镀镍
            <br />
            待测物阈值S2在±1000之间，接近0即镀锌
            <br />
            <br />
            在光强73-175lux下，将阈值S2数据和S1建模线做对比，计算相关系数R²=0.89
            <br />
            在82-161lux下，当缩小光照强度范围之后，R²=0.97，模型有一定的分析效果
            <br />
            因此，稳定的光照条件更复合模型的对
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorSimilarityResults;
