import ReactMarkdown from "react-markdown";

const ArticleParagraph = ({ component }) => {
  let paragraph = component.paragraph.map((item) => {
    return item.children.map((p) => {
      return p.text;
    });
  });
  paragraph = paragraph.flat();
  return (
    <ReactMarkdown className="copy article-paragraph">
      {paragraph.join("").replace(/\. \* /g, "\n* ")}
    </ReactMarkdown>
  );
};

export default ArticleParagraph;
