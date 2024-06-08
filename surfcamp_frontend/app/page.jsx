import Image from "next/image";
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

  // const infoBlockData = {
  //   headline: "the experience",
  //   text: (
  //     <p className="copy">
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
  //       varius enim in eros elementum tristique. Duis cursus, mi quis viverra
  //       ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
  //     </p>
  //   ),
  //   button: <button className="btn btn--small btn--turquoise">BOOK NOW</button>,
  //   reversed: false,
  // };
  return (
    <main>
      <HeroSection headline={heroHeadLine} />
      {infoBlockData.map((data) => (
        <InfoBlock key={data.id} data={data} />
      ))}
    </main>
  );
}
