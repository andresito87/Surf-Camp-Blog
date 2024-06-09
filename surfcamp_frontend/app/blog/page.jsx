import HighlightArticle from "../_components/Blog/HighlightArticle";
import SubscribeToNewsletter from "../_components/Blog/SubscribeToNewsletter";
import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";

export default function Page() {
  const highlightArticle = {
    headline: "3 tips for a super fast takeoff",
    excerpt: (
      <>
        Improving your take-off phase in surfing is a fundamental step toward
        riding waves with more confidence and style. Improving your take-off
        phase is a gradual process, and it may take time to master. Be patient,
        stay committed to practice, and enjoy the journey of becoming a better
        surfer. With dedication and persistence, you'll see progress and have
        more enjoyable rides. Here is how:
      </>
    ),
    slug: "takeoff",
    featuredImage: "assets/hero-experience.png",
  };

  const featuredArticles = [
    {
      headline: "The best surf spots in the world",
      slug: "surf-spots",
      date: "Monday, June 05, 2023",
      featuredImage: "assets/hero-experience.png",
    },
    {
      headline: "How to choose the right surfboard",
      slug: "choose-surfboard",
      date: "Monday, June 05, 2023",
      featuredImage: "assets/hero-experience.png",
    },
    {
      headline: "The best surf spots in the world",
      slug: "surf-spots",
      date: "Monday, July 05, 2023",
      featuredImage: "assets/hero-experience.png",
    },
    {
      headline: "How to choose the right surfboard",
      slug: "choose-surfboard",
      date: "Monday, May 05, 2023",
      featuredImage: "assets/hero-experience.png",
    },
  ];

  return (
    <main className="blog-page">
      <HighlightArticle data={highlightArticle} />
      <SubscribeToNewsletter />
      <FeaturedItems items={featuredArticles} />
    </main>
  );
}
