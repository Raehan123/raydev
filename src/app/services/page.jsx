"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Web development involves designing the UI/UX and developing the front-end using HTML, CSS, and JavaScript, as well as handling back-end development, which includes managing databases, servers, and application logic.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Design aesthetically pleasing and intuitive user interfaces, and design efficient user flows and information structures to ensure a smooth and satisfying experience.",
    href: "",
  },
  {
    num: "03",
    title: "API Development & Integration",
    description:
      "API development and integration to allow web applications to communicate with other applications or third-party services efficiently.",
    href: "",
  },
  {
    num: "04",
    title: "E-commerce Development",
    description:
      "Creation and management of a secure and easy-to-use e-commerce platform, with features such as shopping cart, online payment, and product management.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-outline text-transparent group-hover:text-outline-hover hover:text-yellow-300 transition-all duration-500 ">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
