import Image from "next/image";
import HeroSection from "./_components/HeroSection";

export default function Home() {
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
    </main>
  );
}
