import HighlightArticle from "../_components/Blog/HighlightArticle";
import SubscribeToNewsletter from "../_components/Blog/SubscribeToNewsletter";
import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";
import { fetchBlogArticles } from "@/utils/strapi.utils";

export default async function Page() {
  const data = await fetchBlogArticles();

  // write different queries: fisrt one to find the highlight blog article
  const query = `blog-articles?isHighlight=true`;

  // find the articles that are not highlight articles but sorted by publishing date
  const query2 = `blog-articles?isHighlight=false&_sort=publishedAt:desc`;

  const highlightArticleData = data.find(
    (article) => article.isHighlightArticle
  );
  const featuredArticlesData = data.filter(
    (article) => !article.isHighlightArticle
  );
  return (
    <main className="blog-page">
      <HighlightArticle data={highlightArticleData} />
      <SubscribeToNewsletter />
      <FeaturedItems items={featuredArticlesData} />
    </main>
  );
}

// This page will be re-generated every 5 minutes, keeping the data fresh
export const revalidate = 300;
