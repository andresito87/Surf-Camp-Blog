import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";
import { fetchDataFromStrapi, processInfoBlocks } from "@/utils/strapi.utils";

export default async function Home() {
  const data = await fetchDataFromStrapi("infoblocks-landing?populate=deep");
  const infoBlockData = processInfoBlocks(data);

  const heroHeadLine = (
    <>
      <h1>barrel</h1>
      <h1>your</h1>
      <h1>hapiness</h1>
    </>
  );

  return (
    <main>
      <HeroSection headline={heroHeadLine} />
      {infoBlockData.map((data) => (
        <InfoBlock key={data.id} data={data} />
      ))}
    </main>
  );
}

// Page will be revalidated every 5 minutes on the server
// so that the data is always up to date when the user visits the page
export const revalidate = 300;
