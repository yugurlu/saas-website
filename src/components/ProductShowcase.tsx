"use client"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import appScreen from "../assets/images/app-screen.png";
import { useRef } from "react";
import { log } from "console";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null)

  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-72px sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">Intuitive interface</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motive your efforts, and celebrate your successes,
            one taskt at a time.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image src={appScreen} alt="App screen" className="mt-14 mx-auto rounded-m shadow-2xl" ref={appImage} />
        </motion.div>
      </div>
    </div>
  );
};