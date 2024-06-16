import axios from "axios";
import Link from "next/link";

const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337";

export const fetchDataFromStrapi = async (route) => {
  const url = `${BASE_URL}/api/${route}`;
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Could not fetch data from ${url}`);
  }
};

export function processInfoBlocks(data) {
  const infoBlockRaw = data.attributes.info_blocks.data;
  return infoBlockRaw.map((infoBlock) => ({
    ...infoBlock.attributes,
    imageSrc: BASE_URL + infoBlock.attributes?.image?.data?.attributes?.url,
    id: infoBlock.id,
    button: createInfoBlockButton(infoBlock.attributes.button),
  }));
}

function createInfoBlockButton(buttonData) {
  if (!buttonData) return null;
  return (
    <Link
      href={`/${buttonData.slug}`}
      className={`btn btn--small btn--${buttonData.colour}`}
    >
      {buttonData.text}
    </Link>
  );
}

export async function fetchBlogArticles() {
  const blogData = await fetchDataFromStrapi("blog-articles?populate=deep");
  const processedBlogArticles = blogData.map(processBlogArticles);

  // Sort articles by date of publication
  processedBlogArticles.sort(
    (articleA, articleB) =>
      new Date(articleB.publishedAt) - new Date(articleA.publishedAt)
  );

  return processedBlogArticles;
}

function processBlogArticles(article) {
  return {
    ...article.attributes,
    id: article.id,
    featuredImage:
      BASE_URL + article.attributes?.featuredImage?.data?.attributes?.url,
  };
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export function extractImageUrl(imageData) {
  return BASE_URL + imageData.data?.attributes?.url;
}

export async function fetchIndividualEvent(eventId) {
  const response = await axios.get(`${BASE_URL}/api/events/${eventId}`);

  return processEventData(response.data.data);
}

function processEventData(event) {
  return {
    ...event.attributes,
    id: event.id,
  };
}

export function generateSignupPayload(formData, eventId) {
  if (!eventId) {
    return {
      data: {
        ...formData,
        isGeneralInterest: true,
      },
    };
  } else {
    return {
      data: {
        ...formData,
        event: {
          connect: [eventId],
        },
      },
    };
  }
}
