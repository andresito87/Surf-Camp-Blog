import ReactMarkdown from "react-markdown";

const InfoBlock = ({ data }) => {
  const { headline, text, button, showImageRight, imageSrc } = data;
  return (
    <div className={`info ${showImageRight ? "info--reversed" : ""}`}>
      <img
        className="info__image"
        src={imageSrc || "/info-blocks/rectangle.png"}
        alt=""
      />
      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        {text.map((child) =>
          child.children.map((child) => (
            <ReactMarkdown className="copy">{child.text}</ReactMarkdown>
          ))
        )}
      </div>
    </div>
  );
};

export default InfoBlock;
