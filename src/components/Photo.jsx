"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
        >
          <div className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] mix-blend-lighten absolute">
            <Image
              src="/assets/rehan-formal-removebg-preview.png"
              priority
              quality={100}
              fill
              alt=""
              className="object-contain rounded-full"
            />
          </div>
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[500px] h-[350px] xl:h-[550px]"
          fill="transparent"
          viewBox="0 0 510 516"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#fdd947"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 10 10" }}
            animate={{
              strokeDasharray: ["90 90 90 90", "16 25 95 75", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
