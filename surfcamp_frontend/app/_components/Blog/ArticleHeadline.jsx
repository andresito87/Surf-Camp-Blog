const ArticleHeadline = ({ component }) => {
  return (
    <h3 className="article-healine" id={component.slug}>
      {component.headline}
    </h3>
  );
};

export default ArticleHeadline;
