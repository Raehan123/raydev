"use client";

import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaLaravel,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// !about data
const about = {
  title: "About me",
  description:
    "I am a person who likes to get along with anyone but I can choose which one is good for me and which one is bad for me, and I am a person who can be considered a hard worker, never back down, and honest, I have to be ready for whatever challenges I am experiencing now and in the future, and I am very happy when learning what I want to do for my future.",
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Raehan Nurmishuari",
    },
    {
      fieldName: "Phone:",
      fieldValue: "(+62) 856 9404 9xxx",
    },
    {
      fieldName: "Experience:",
      fieldValue: "6+ Months",
    },
    {
      fieldName: "Nationality:",
      fieldValue: "Indonesian",
    },
    {
      fieldName: "Languages:",
      fieldValue: "Indonesia, English",
    },
    {
      fieldName: "Email:",
      fieldValue: "nurrayhan62@gmail.com",
    },
  ],
};

// !experience data
const experience = {
  title: "My Experience",
  description:
    "My first experience, when I was in my first semester at Nurul Fikri integrated technology high school campus, I learned to use HTML, CSS, and a little Javascript, then I continued to practice making websites with HTML and CSS, at that time I felt I didn't know anything about coding, after I found out about coding it turned out to be fun too, and in my first semester I made a simple website containing my biodata and even then it was still messy because I didn't know more about this coding, during UTS and UAS semester 1 I made a project with my friend using HTML, CSS and a little Javascript, then in semester 2 I learned about laravel and PHP programming language and there I learned about CRUD (Create, Read, Update, and Delete), as usual during UTS and UAS, I made a project with my friend and that was my first experience.",
  items: [
    {
      company: "Puskesmas App",
      position: "Frontend and Backend Web Developer",
      duration: "2024 - present",
    },
    {
      company: "E-commerce Electronic",
      position: "Backend Web Developer",
      duration: "2024 - present",
    },
  ],
};

// !education data
const education = {
  title: "My Education",
  description:
    "When it comes to becoming a programmer, there is actually no rigid educational path. Many people start from elementary and middle school (elementary, middle, high school) where they learn basics such as math and logic that are useful for programming. At school, there are also extracurricular activities such as computer clubs that can help understand technology early on. After graduating from high school, when I was still in high school, my major was science, and after graduating from high school, I tried to enter an IT campus, namely the Nurul Fikri Integrated Technology College and majored in informatics engineering, usually people continue to college or university by choosing majors such as Computer Science, Informatics Engineering, or Information Systems.",

  items: [
    {
      school: "SMA Putra Bangsa",
      major: "Natural Science",
      duration: "2020 - 2023",
    },
    {
      school: "High School Technologies Nurul Fikri",
      major: "Informatic Engineer",
      duration: "2023 - present",
    },
  ],
};

// !skills data
const skills = {
  title: "My Skills",
  description:
    "I have several skills, and over the next 6 months I will be able to specialize in web development, I am also focusing on web development, because I think that websites are very important for human needs because they can load information and so on, and I have developed expertise in the following areas of the field",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5 ",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3 ",
    },
    {
      icon: <FaJs />,
      name: "JavaScript ",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next Js",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-yellow-300">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-yellow-300"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-yellow-300">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.major}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-yellow-300"></span>
                            <p className="text-white/60">{item.school}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-yellow-300 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                  <hr className="border border-b-3" />
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex justify-center items-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-white">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
