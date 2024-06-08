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
