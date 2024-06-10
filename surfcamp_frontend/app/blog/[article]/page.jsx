import ArticleIntro from "@/app/_components/Blog/ArticleIntro";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function Page({ params }) {
  const { article: slug } = params;
  const articles = await fetchBlogArticles();
  // Find the article that matches the slug what was passed in the URL like /blog/my-article
  const article = articles.find((article) => article.slug === slug);
  return (
    <main>
      <ArticleIntro article={article} />
    </main>
  );
}

// This function will be called at build time and will return an array of possible values for article
// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props
export async function getStaticParams() {
  const articles = await fetchDataFromStrapi("blog-articles");

  return articles.map((article) => ({
    article: {
      article: article.attributes.slug,
    },
  }));
}
