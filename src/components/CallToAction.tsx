"use client";
import Image from "next/image";

import helixImage from "../assets/images/helix2.png"
import emojiStarImage from "../assets/images/emojistar.png"
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],

  })

  const translateY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <div className="bg-black text-white py-[72px] sm:p-24 text-center overflow-hidden" ref={containerRef}>
      <div className="container max-w-xl relative ">
        <motion.div style={{ translateY }} >
          <Image src={helixImage} alt="helix" className="absolute top-6 left-[calc(100%+36px)]" />
        </motion.div>
        <motion.div style={{ translateY }} >
          <Image src={emojiStarImage} alt="emoji star" className="absolute -top-[90px] right-[calc(100%+24px)]" />
        </motion.div>
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">Get instant access</h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" className=" bg-white/20 rounded-lg  py-3 px-5 outline-none font-medium placeholder:text-[#9CA3AF] flex-1" />
          <button className="bg-white text-black h-12 rounded-lg px-5">Get access</button>
        </form>
      </div>
    </div>
  );
};
