interface IntroParagraphProps {
  title: string;
  description: string;
}

const IntroParagraph: React.FC<IntroParagraphProps> = ({
  title,
  description,
}) => {
  return (
    <div className="intro-paragraph pb-12 px-10">
      <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      <p className="mt-4 text-2xl text-gray-600">{description}</p>
    </div>
  );
};

export default IntroParagraph;
