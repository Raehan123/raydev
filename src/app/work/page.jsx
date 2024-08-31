"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack Web",
    title: "Puskesmas App",
    description:
      "The puskesmas website provides information on the various health services available, such as doctor's schedules, types of services offered, work units, and medical procedures. Patients can easily find out the services they need without having to come directly to the puskesmas.",
    stack: [{ name: "Html 5" }, { name: "PHP" }, { name: "Bootstrap" }],
    image: "/assets/work/puskesmas.png",
    live: "",
    github: "https://github.com/Raehan123/projek-puskesmas-app",
  },
  {
    num: "02",
    category: "Fullstack Web",
    title: "Electronic E-commerce",
    description:
      "E-commerce features on the website make it easy for shoppers to buy online without having to go to the place and provide a wide range of products from different categories and brands, allowing shoppers to compare multiple options on a single platform, shoppers can also view reviews and ratings from other users who have purchased the product, helping in decision making.",
    stack: [{ name: "Laravel 11" }, { name: "Node Js" }, { name: "Bootstrap" }],
    image: "/assets/work/radarabi.png",
    live: "https://ecommerceradarabi.vistacinema.digital/",
    github: "https://github.com/Raehan123/projek-uas-pemweb",
  },
  {
    num: "03",
    category: "UI/UX Design",
    title: "Field Project Timah",
    description:
      "Field website features for soccer players can easily check field availability, opening hours, and vacant schedules so as to facilitate planning to play, Allows online field reservations, which makes it easier for players to secure a place without having to come in person.",
    stack: [{ name: "Figma" }],
    image: "/assets/work/uiux-figma.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-yellow-300 transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-yellow-300">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-yellow-300 group-hover:rotate-45 duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-yellow-300  duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          fill
                          src={project.image}
                          className="object-center"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify:none"
                btnStyles="bg-yellow-300 hover:bg-primary text-primary hover:text-yellow-300 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
