import Link from "next/link";

const ArticleOverview = ({ article }) => {
  const headline = article.articleContent.filter(
    (component) => component.__component === "blog-article.headline"
  );
  return (
    <div className="article-overview">
      <div className="article-overview__info">
        <h3 className="article-overview__headline">In this blog</h3>
        <h5 className="article-overview__excerpt">{article.excerpt}</h5>
      </div>
      <ul className="article-overview__contents">
        {headline.map((component, index) => (
          <li key={index} className="article-overview__content">
            <Link href={`#${component.slug}`}>
              {component.id}. {component.headline}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleOverview;
