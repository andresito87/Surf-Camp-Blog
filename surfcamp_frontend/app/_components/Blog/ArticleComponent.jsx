import ArticleHeadline from "./ArticleHeadline";

const ArticleComponent = ({ component }) => {
  const componentType = component.__component.split("blog-article.")[1];
  switch (componentType) {
    case "headline":
      return <ArticleHeadline component={component} />;
    case "paragraph-with-image":
      return <h1>Paragraph qith image</h1>;
    case "paragraph":
      return <h1>Paragraph</h1>;
  }
};

export default ArticleComponent;
