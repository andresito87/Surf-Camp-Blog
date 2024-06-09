import { formatDate } from "@/utils/strapi.utils";
import Link from "next/link";

const FeaturedArticle = ({ article }) => {
  return (
    <Link className="featured-items__article" href={`/blog/${article.slug}`}>
      <div className="featured-items__article-img">
        <img
          src={article.featuredImage}
          alt={`Go read article ${article.headline}`}
          className=""
        />
      </div>
      <div className="featured-items__article-text">
        <h5 className="featured-items__headline">{article.headline}</h5>
        <p className="copy-small">{formatDate(article.publishedAt)}</p>
      </div>
    </Link>
  );
};

export default FeaturedArticle;
