"use client";

import {
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaDatabase,
  FaLinux,
} from "react-icons/fa";
import { SiHtml5, SiSpringboot, SiPostman, SiMysql, SiBootstrap, SiJson, SiNextdotjs, SiTailwindcss, SiDocker, SiKubernetes } from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// About section
const about = {
  title: "About me",
  description: "Provides key personal details about the me.",
  info: [
    { fieldName: "Name", fieldValue: "Shiyam" },
    { fieldName: "Phone", fieldValue: "(+91) 9944117511" },
    { fieldName: "Experience", fieldValue: "1+ year" },
    { fieldName: "Email", fieldValue: "k.s.shiyam2002@gmail.com" },
    { fieldName: "Languages", fieldValue: "English, Tamil, Sourashtra" },
  ],
};

// Experience section
const experience = {
  title: "My experience",
  description: "Highlighted my professional roles and the companies I have worked with.",
  items: [
    { company: "Synergech", position: "Software Developer - Trainee", duration: "2024 - Present" },
    { company: "Accenture", position: "Packaged App Development Associate", duration: "2024 - 8 months" },
    { company: "Cognitive Machines", position: "Associate Software Developer - Intern", duration: "2023 - 2 months" },
  ],
};

// Education section
const education = {
  title: "My education",
  description: "Listed my academic qualifications and the institutions I have attended.",
  items: [
    { institution: "Sona College of Arts and Science", degree: "Bachelor of Computer Applications (BCA)", duration: "2020 - 2023" },
    { institution: "Sri Vidya Mandir Higher Secondary School", degree: "Higher Secondary Education", duration: "2019 - 2020" },
    { institution: "Sri Seshaas International Public School", degree: "Secondary Education", duration: "2017 - 2018" },
  ],
};

// Skill section
const skill = {
  title: "My skills",
  description: "Showcases my technical abilities, along with my strong communication and problem-solving skills.",
  skillset: [
    { icon: <FaJava />, name: "Java" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <FaReact />, name: "ReactJS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiJson />, name: "JSON" },
    { icon: <FaDatabase />, name: "Database" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <VscAzure />, name: "Azure" },
    { icon: <VscVscode />, name: "Vscode" },
    { icon: <FaLinux />, name: "Linux" },
  ]
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">

        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skill">Skill</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-cyan-400">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-cyan-400"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-cyan-400">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-cyan-400"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skill */}
            <TabsContent value="skill" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skill.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skill.description}</p>


                <ScrollArea className="h-[400px] overflow-auto">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skill.skillset.map((skills, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-cyan-400 transition-all duration-300">
                                {skills.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skills.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>

                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex flex-col gap-2">
                      <span className="text-white/60">{item.fieldName}</span>
                      <h4 className="text-lg">{item.fieldValue}</h4>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
