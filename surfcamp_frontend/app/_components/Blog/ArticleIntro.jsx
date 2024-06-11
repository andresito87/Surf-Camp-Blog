"use client"; // to use hooks useState need to be in client mode
import { formatDate } from "@/utils/strapi.utils";
import { useState } from "react";

const ArticleIntro = ({ article }) => {
  const [isDark, setIsDark] = useState(false);
  if (isDark !== article.isHeadlineColorDark) {
    setIsDark(article.isHeadlineColorDark);
  }
  return (
    <div className="article-intro">
      <div className="article-intro__background">
        <img src={article.featuredImage} alt="" />
      </div>
      <h3
        className={`article-intro__headline ${
          article.isHeadlineColorDark ? "" : "light"
        }`}
      >
        {article.headline}
      </h3>
      <p
        className={`copy-small bold ${
          article.isHeadlineColorDark ? "" : "light"
        } `}
      >
        {formatDate(article.publishedAt)}
      </p>
      <p className={`copy-small ${article.isHeadlineColorDark ? "" : "light"}`}>
        {article.author}
      </p>
    </div>
  );
};
export default ArticleIntro;
