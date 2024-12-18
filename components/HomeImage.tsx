"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";


export default function HomeImage() {
   

  return (
    <motion.div
      variants={{
        inital: { y: -10 },
        animate: {
          y: [10, -10],
          transition: {
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        },
      }}
      initial="inital"
      animate="animate"
    >
      <Image alt="home" src="/homeanim.png" width={420} height={420} />
    </motion.div>
  );
}
