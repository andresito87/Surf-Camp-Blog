const ArticleHeadline = ({ component }) => {
  return (
    <h3 className="article-headline" id={component.slug}>
      {component.headline}
    </h3>
  );
};

export default ArticleHeadline;
