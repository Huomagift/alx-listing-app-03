import React from "react";
import { HeroImage } from "@/constants";
import Image from "next/image";

const Home = () => {
  return (
    <main>
      <Image src={HeroImage} alt="hero_image" width={1608} height={481} />
    </main>
  );
};

export default Home;
