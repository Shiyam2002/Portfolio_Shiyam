"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";
import ProjectSlideBtns from "@/components/ProjectSlideBtns";

const projects = [
  {
    num: "01",
    category: "full-stack",
    title: "Project 1",
    description: "System for seamless healthcare appointment scheduling, enhancing patient management and service efficiency.",
    stack: [
      { name: "Spring Boot" },
      { name: "ReactJs" },
      { name: "MySQL" },
    ],
    image: "/assets/project01.png",
    live: "",
    github: "https://github.com/Shiyam2002/Front_end",
  },
  // {
  //   num: "02",
  //   category: "full-stack",
  //   title: "Project 1",
  //   description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, reiciendis.",
  //   stack: [
  //     { name: "Spring Boot" },
  //     { name: "ReactJs" },
  //     { name: "Postman" },
  //   ],
  //   image: "",
  //   live: "",
  //   github: "",
  // }
]

const Projects = () => {
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
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline */}
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>

              {/*Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-cyan-400 transition-all duration-500 capitalize">
                {project.category} Project
              </h2>

              {/*project description */}
              <p className="text-white/60">{project.description}</p>

              {/*Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return <li key={index} className="text-xl text-cyan-400">
                    {item.name}
                    {/*Removing the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                })}
              </ul>

              {/*border */}
              <div className="border border-white/20"></div>

              {/*button */}
              <div className="flex items-center gap-4">
                {/*Live project button */}
                <Link href={project.live} target="blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-cyan-400" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/*github project button */}
                <Link href={project.github} target="blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-cyan-400" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    {/* image */}
                    {project.image && (
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt={project.title} />
                      </div>
                    )}

                  </div>
                </SwiperSlide>
              })}
              {/* Slide buttons */}
              <ProjectSlideBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-cyan-400 hover:bg-cyan-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
