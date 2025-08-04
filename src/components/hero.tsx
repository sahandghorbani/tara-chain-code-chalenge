"use client";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-8 text-white">
      <div className="md:w-1/2 space-y-4">
        <p className="font-bold text-[#47FC28] text-xl md:text-2xl">
          LOREM EPSUM
        </p>

        <h1 className="font-bold text-gray-200 text-3xl md:text-5xl">
          <span className="text-[#47FC28]">Lorem ipsum dolor</span> sit amet,
          consectetur
        </h1>

        <p className="text-gray-100 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget velit
          aliquet sagittis id consectetur purus ut faucibus pulvinar. Sit amet
          commodo nulla facilisi nullam vehicula. Arcu risus quis varius quam
          quisque id diam.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <Image src="/hero.png" alt="Crypto blocks" width={400} height={400} />
      </div>
    </section>
  );
};

